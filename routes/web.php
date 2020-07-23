<?php

Auth::routes();

Route::get('/{any}', 'AppController@show')->where('any', '.*');
