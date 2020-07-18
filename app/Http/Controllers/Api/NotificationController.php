<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class NotificaitonController extends Controller
{

    public function show()
    {
        return auth()->user()->unreadNotifications;
    }
}
