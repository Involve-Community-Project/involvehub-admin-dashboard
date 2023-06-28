<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Auth Routes
|--------------------------------------------------------------------------
*/

Route::post('/login', function (Request $request) {
    return $request->user();
});

Route::post('/register', function (Request $request) {
    return $request->user();
});

Route::post('/logout', function (Request $request) {
    return $request->user();
});
