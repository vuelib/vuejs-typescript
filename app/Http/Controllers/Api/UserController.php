<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $users->load('invoice');
        return $users;
    }

    public function show($id)
    {
        $user = User::find($id);
        $user->load('orders.amounts.product', 'invoice');
        return $user;
    }

    public function store()
    {
        return auth()->user()->load('orders.amounts.product', 'invoice');
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->orders()->delete();
        $user->delete();
    }

    public function changeContact()
    {
        $user = auth()->user();
        $data = request()->validate($this->contact());
        if (!Hash::check($data['password'], $user->password)) {
            return response()->json('Hesla se neshodují', 404);
        } else {

            //            $user->email = $data['email'];
            $user->phone = $data['phone'];
            $user->push();
        }
    }

    public function changePassword()
    {

        $user = auth()->user();
        $data = request()->validate($this->password());
        if (!Hash::check($data['old_password'], $user->password)) {
            return response()->json('Hesla se neshodují', 404);
        } else {
            $user->password = Hash::make($data['password']);
            $user->push();
            return response()->json('true', 200);
        }
    }

    public function password()
    {
        return [
            'old_password' => 'required:min:8|max:200',
            'password' => 'required|min:8|max:200',
            'confirm_password' => 'required_with:password|same:password|min:8|max:200'
        ];
    }

    public function contact()
    {
        return [
            'password' => 'required:min:8|max:200',
            'phone' => 'required|unique:users|digits:9'
        ];
        //            'email' => 'required|unique:users|string|email|max:255',
    }
}
