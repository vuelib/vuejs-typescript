<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
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
                'client_id' => '4',
                'client_secret' => 'Ibw7dk37rcQLHPGPlALre90hrQ4YY6Anuv3a3zKa',
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
