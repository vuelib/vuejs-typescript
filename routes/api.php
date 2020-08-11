<?php

use Illuminate\Support\Facades\Route;



Route::group(['middleware' => 'guest:api'], function () {

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.reset');

    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');
});

Route::group(['namespace' => 'Api'], function () {
    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('contact', 'ContactController@store');
});

Route::group(['middleware' => 'auth:api', 'namespace' => 'Api'], function () {
    //Users route
    Route::post('change-contact', 'UserController@changeContact');
    Route::post('change-password', 'UserController@changePassword');
    Route::post('logout', 'AuthController@logout');
    //Admin
    // Route::get('allorders', 'OrderAdminController@index');
    Route::post('ares', 'AresController@check');
    Route::post('product', 'ProductController@store');
    Route::get('orders', 'Admin\OrderController@all');
    Route::get('orders/{user}', 'Admin\OrderController@index');
    Route::put('order/{order}/confirm', 'OrderController@confirm');
    Route::apiResource('user', 'UserController');
    Route::apiResource('invoice', 'InvoiceController')->only('store', 'update');
    Route::apiResource('order', 'OrderController');
    Route::apiResource('amount', 'AmountController')->only('update', 'destroy');
    Route::apiResource('products', 'ProductController')->only(['index'])->withoutMiddleware('auth:api');
    Route::apiResource('category', 'CategoryController')->only('index', 'show')->withoutMiddleware('auth:api');
    Route::apiResource('category', 'CategoryController')->except('index', 'show');
});
