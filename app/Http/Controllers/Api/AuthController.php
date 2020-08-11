<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;


class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {

        $data = request()->validate([
            'username' => ['required', 'string', 'email', 'max:255',],
            'password' => ['required', 'string', 'min:8', 'max:255'],
        ]);

        $httpHost = request()->getSchemeAndHttpHost();
        $httpHost .= "/oauth/token";

        try {

            request()->request->add([
                'username' => $data['username'],
                'password' => $data['password'],
                'grant_type' => 'password',
                'client_id' => config('services.passport.client_id'),
                'client_secret' => config('services.passport.client_secret'),
                'scope' => '*'
            ]);

            $tokenRequest = Request::create(
                $httpHost,
                'post'
            );

            $response = Route::dispatch($tokenRequest);

            return $response;
        } catch (\Exception $e) {
            if ($e->getCode() === 400) {
                return response()->json('Špatné heslo nebo jméno.', 404);
            } else if ($e->getCode() === 401) {
                return response()->json('Vaše přihlašovací údaje jsou nesprávné, zkuste to znovu.', $e->getCode());
            }

            return response()->json('Něco špatného se stalo na serveru..', $e->getCode());
        }
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|digits:9|unique:users',
            'password' => 'required|string|min:8',
            'confirm_password' => 'required_with:password|same:password|min:8|max:200'
        ]);

        return User::create([
            'email' => $request->email,
            'phone' => $request->phone,
            'roles_id' => 1,
            'password' => Hash::make($request->password),
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);
    }
}
