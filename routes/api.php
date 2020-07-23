<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'api'], function () {
    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    // Route::post('forgot_password', 'AuthController@forgot_password')->name('password.reset');

    Route::post('contact', 'ContactController@store');
});

Route::group(['middleware' => 'auth:api', 'namespace' => 'api'], function () {
    //Users route
    // Route::post('change_password', 'AuthController@change_password');
    // Route::put('changeContact', 'UserController@changeContact');
    // Route::put('changePassword', 'UserController@changePassword');
    // Route::post('user', 'InvoiceController@check');
    // Route::post('logout', 'AuthController@logout');
    //Admin
    // Route::get('allorders', 'OrderAdminController@index');
    Route::resource('user', 'UserController');
    Route::post('ares', 'AresController@check');
    Route::resource('invoice', 'InvoiceController')->only('store', 'update');
    Route::post('product', 'ProductController@store');
    Route::resource('products', 'ProductController')->only(['index'])->withoutMiddleware('auth:api');
    Route::resource('category', 'CategoryController')->only('index', 'show')->withoutMiddleware('auth:api');
    Route::apiResource('order', 'OrderController');
    Route::resource('amount', 'AmountController')->only('update', 'destroy');
});
