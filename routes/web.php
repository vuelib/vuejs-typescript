<?php

Route::get('/{any}', 'AppController@show')->where('any', '.*');
