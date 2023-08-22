<?php

namespace App\Proxies;

use App\Enums\OAuthGrantType;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class OAuthProxy
{
    public function __construct(
        protected Request $request,
        protected Response $response,
        protected array $headers = [
            'Accept' => 'application/json',
        ],
    ) {
    }

    public function requestAccessToken($options = []): Response
    {
        $response = match ($options['grant_type']) {
            OAuthGrantType::PASSWORD => $this->requestPasswordAccessToken($options),
            OAuthGrantType::REFRESH_TOKEN => $this->requestRefreshToken($options),
            default => throw new \Exception('Invalid grant type'),
        };

        return $response;
    }

    public function requestPasswordAccessToken($options = []): Response
    {
        return $this->makeRequest('/oauth/token', 'POST', [
            'grant_type' => OAuthGrantType::PASSWORD->value,
            'client_id' => config('passport.password_client.web_app.id'),
            'client_secret' => config('passport.password_client.web_app.secret'),
            'username' => $options['username'],
            'password' => $options['password'],
            'scopes' => '[*]',
        ]);
    }

    public function requestRefreshToken($options = []): Response
    {
        return $this->makeRequest('/oauth/token', 'POST', [
            'grant_type' => OAuthGrantType::REFRESH_TOKEN->value,
            'refresh_token' => $options['refresh_token'],
            'client_id' => config('passport.password_client.web_app.id'),
            'client_secret' => config('passport.password_client.web_app.secret'),
        ]);
    }

    protected function makeRequest($uri, $method, $params): Response
    {
        $request = Request::create($uri, $method, $params);
        $request->headers->add($this->headers);

        return app()->handle($request);
    }
}
