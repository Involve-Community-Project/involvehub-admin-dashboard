<?php

namespace App\Http\Controllers\Api\Auth;

use App\Enums\OAuthGrantType;
use App\Http\Controllers\Controller;
use App\Proxies\OAuthProxy;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class AuthenticationController extends Controller
{
    public function __construct(
        protected OAuthProxy $proxy,
        protected ResponseFactory $responseFactory,
    ) {
    }

    /**
     * Generate a new access token.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        return $this->requestPasswordGrant($request);
    }

    /**
     * Refresh an access token.
     */
    public function update(Request $request): JsonResponse
    {
        $token = (string) $request->cookie('refresh_token');

        if (! $token) {
            throw ValidationException::withMessages([
                'refresh_token' => trans('oauth.missing_refresh_token'),
            ]);
        }

        return $this->requestRefreshTokenGrant($request, $token);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        /** @var \App\Models\User|null $user * */
        $user = Auth::user();

        $user->token()->revoke();

        return response(null, 204);
    }

    /**
     * Create a new access token from a password grant client.
     */
    public function requestPasswordGrant(Request $request): JsonResponse
    {
        $this->ensureIsNotRateLimited();

        RateLimiter::hit($this->throttleKey());

        $response = $this->proxy->requestAccessToken([
            'grant_type' => OAuthGrantType::PASSWORD,
            'username' => $request->email,
            'password' => $request->password,
        ]);

        if ($response->isSuccessful()) {
            RateLimiter::clear($this->throttleKey());

            return $this->sendSuccessResponse($response);
        }

        return $this->sendFailedResponse($response);
    }

    /**
     * Create a new access token from a refresh token grant client.
     */
    public function requestRefreshTokenGrant(Request $request, string $refreshToken): JsonResponse
    {
        $this->ensureIsNotRateLimited();

        RateLimiter::hit($this->throttleKey());

        $response = $this->proxy->requestAccessToken([
            'grant_type' => OAuthGrantType::REFRESH_TOKEN,
            'refresh_token' => $refreshToken,
        ]);

        if ($response->isSuccessful()) {
            RateLimiter::clear($this->throttleKey());

            return $this->sendSuccessResponse($response);
        }

        return $this->sendFailedResponse($response);
    }

    /**
     * Return a successful response for requesting an api token.
     */
    public function sendSuccessResponse(Response $response): JsonResponse
    {
        $data = json_decode($response->getContent());

        $content = [
            'access_token' => $data->access_token,
            'expires_in' => $data->expires_in,
            'token_type' => $data->token_type,
        ];

        return $this->responseFactory
            ->json($content, $response->getStatusCode())
            ->withCookie(
                cookie()->forever('refresh_token', $data->refresh_token, null, null, null, false, true)
            );
    }

    /**
     * Return a failed response for requesting an api token.
     */
    public function sendFailedResponse(Response $response): JsonResponse
    {
        if (
            Str::contains($response->headers->get('Content-Type'), 'application/json')
            || Str::contains($response->headers->get('Content-Type'), 'text/plain')
            && json_decode($response->getContent(), true) !== null
        ) {
            return $this->responseFactory->json(
                [...json_decode($response->getContent(), true)],
                $response->getStatusCode(),
                (array) $response->headers->all()
            );
        }

        if (Str::contains($response->headers->get('Content-Type'), 'text/plain')) {
            return $this->responseFactory->json([
                'message' => $response->getContent(),
            ], $response->getStatusCode());
        }

        return $this->responseFactory->json([
            'message' => 'Something went wrong. Please try again later.',
            // 'response' => $response->getContent(),
        ], $response->getStatusCode());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), $this->maxAttempts())) {
            return;
        }

        event(new Lockout(request()));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower(request()->input('email')) . '|' . request()->ip());
    }

    public function maxAttempts(): int
    {
        return 10;
    }
}
