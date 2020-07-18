<?php

namespace App\Http\Controllers;

use App\Amount;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function show()
    {
        return view('layouts.app');
    }
}
