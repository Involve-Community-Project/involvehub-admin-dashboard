<?php

use App\Http\Controllers\Api\Auth\AuthenticationController;
use App\Http\Controllers\Api\Auth\EmailVerificationNotificationController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    // Route::post('register', [RegisteredUserController::class, 'store']);

    Route::post('login', [AuthenticationController::class, 'store'])
        ->name('login');

    Route::post('refresh-token', [AuthenticationController::class, 'update'])
        ->name('refresh-token');

    // Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //     ->name('password.request');

    // Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //     ->name('password.email');

    // Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //     ->name('password.reset');

    // Route::post('reset-password', [NewPasswordController::class, 'store'])
    //     ->name('password.store');
});

Route::middleware('auth:api')->group(function () {
    Route::get('check-auth', function () {
        return response()->json(['message' => 'Authenticated'], 200);
    });

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');
});
