<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {

        request()->validate([
            'username' => ['required', 'string', 'email', 'max:255',],
            'password' => ['required', 'string', 'min:8', 'max:255'],
        ]);

        try {
            $username = request()->username;
            $password = request()->password;

            request()->request->add([
                'username' => $username,
                'password' => $password,
                'grant_type' => 'password',
                'client_id' => config('services.passport.client_id'),
                'client_secret' => config('services.passport.client_secret'),
                'scope' => '*'
            ]);

            $tokenRequest = Request::create(
                env('APP_URL') . '/oauth/token',
                'post'
            );

            $response = Route::dispatch($tokenRequest);

            return $response;
        } catch (\Exception $e) {
            if ($e->getCode() === 400) {
                return response()->json('Invalid Request. Please enter a username or a password.', 404);
            } else if ($e->getCode() === 401) {
                return response()->json('Your credentials are incorrect. Please try again', $e->getCode());
            }

            return response()->json('Something went wrong on the server.', $e->getCode());
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
            'password' => Hash::make($request->password),
        ]);
    }

    // public function forgot_password(Request $request)
    // {
    //     $input = $request->all();
    //     $rules = array(
    //         'email' => "required|email",
    //     );
    //     $validator = Validator::make($input, $rules);
    //     if ($validator->fails()) {
    //         $arr = array("status" => 400, "message" => $validator->errors()->first(), "data" => array());
    //     } else {
    //         try {
    //             $response = Password::sendResetLink($request->only('email'), function (Message $message) {
    //                 $message->subject($this->getEmailSubject());
    //             });
    //             switch ($response) {
    //                 case Password::RESET_LINK_SENT:
    //                     return \Response::json(array("status" => 200, "message" => trans($response), "data" => array()));
    //                 case Password::INVALID_USER:
    //                     return \Response::json(array("status" => 400, "message" => trans($response), "data" => array()));
    //             }
    //         } catch (\Swift_TransportException $ex) {
    //             $arr = array("status" => 400, "message" => $ex->getMessage(), "data" => []);
    //         } catch (Exception $ex) {
    //             $arr = array("status" => 400, "message" => $ex->getMessage(), "data" => []);
    //         }
    //     }
    //     return \Response::json($arr);
    // }

    // public function change_password(Request $request)
    // {
    //     $input = $request->all();
    //     $userid = Auth::guard('api')->user()->id;
    //     $rules = array(
    //         'old_password' => 'required',
    //         'new_password' => 'required|min:6',
    //         'confirm_password' => 'required|same:new_password',
    //     );
    //     $validator = Validator::make($input, $rules);
    //     if ($validator->fails()) {
    //         $arr = array("status" => 400, "message" => $validator->errors()->first(), "data" => array());
    //     } else {
    //         try {
    //             if ((Hash::check(request('old_password'), Auth::user()->password)) == false) {
    //                 $arr = array("status" => 400, "message" => "Check your old password.", "data" => array());
    //             } else if ((Hash::check(request('new_password'), Auth::user()->password)) == true) {
    //                 $arr = array("status" => 400, "message" => "Please enter a password which is not similar then current password.", "data" => array());
    //             } else {
    //                 User::where('id', $userid)->update(['password' => Hash::make($input['new_password'])]);
    //                 $arr = array("status" => 200, "message" => "Password updated successfully.", "data" => array());
    //             }
    //         } catch (\Exception $ex) {
    //             if (isset($ex->errorInfo[2])) {
    //                 $msg = $ex->errorInfo[2];
    //             } else {
    //                 $msg = $ex->getMessage();
    //             }
    //             $arr = array("status" => 400, "message" => $msg, "data" => array());
    //         }
    //     }
    //     return \Response::json($arr);
    // }


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
