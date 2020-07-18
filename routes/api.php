<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'api'], function () {
    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('forgot_password', 'AuthController@forgot_password');
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
    // Route::get('allusers', 'UserController@index');
    // Route::get('userprofile/{id}', 'UserController@show');
    // Route::delete('deleteuser/{id}', 'UserController@destroy');
    // Route::post('invoice/{id}', 'InvoiceController@add');
    // Route::put('invoice/{id}', 'InvoiceController@update');
    // Route::post('order/{id}', 'OrderAdminController@store');
    // Route::put('order/{user}/{order}', 'OrderController@update');
    //Ares
    Route::post('ares', 'AresController@check');
    //Invoice
    Route::resource('invoice', 'InvoiceController')->only('store', 'update');
    // Route::post('invoice', 'InvoiceController@store');
    // Route::put('invoice', 'InvoiceController@update');
    //Product
    Route::post('product', 'ProductController@store');
    //Category
    // Route::resource('category', 'CategoryController')->except('index', 'show');
    Route::resource('category', 'CategoryController')->only('index', 'show')->withoutMiddleware('auth:api');
    Route::resource('products', 'ProductController')->only(['index'])->withoutMiddleware('auth:api');
    // Route::post('category/{category}', 'CategoryController@update');
    // Route::post('category', 'CategoryController@store');
    // Route::delete('category/{category}', 'CategoryController@destroy');
    //Orders
    Route::resource('order', 'OrderController');
    // Route::get('orders', 'OrderrController@index');
    // Route::get('order/{order}', 'OrderrController@show');
    // Route::post('order', 'OrderrController@store');
    // Route::put('order/{order}', 'OrderrController@update');
    // Route::post('order/{order}/confirm', 'OrderrController@confirm');
    // Route::delete('order/{order}', 'OrderrController@destroy');
    //Amount
    Route::resource('amount', 'AmountController')->only('update', 'destory');
    // Route::put('amount/{amount}', 'AmountController@update');
    // Route::delete('amount/{amount}', 'AmountController@destroy');
});


//Category
// Route::get('categories', 'CategoryController@index');
// Route::get('category/{category}', 'CategoryController@show');
//Product
// Route::resource('products', 'ProductController')->only(['index']);
// Route::get('products', 'ProductController@index');
