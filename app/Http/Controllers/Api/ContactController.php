<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormMail;
use App\Role;
use Illuminate\Support\Facades\Mail;


class ContactController extends Controller
{
    public function store()
    {
        $data = request()->validate($this->rules());
        $author = Role::find('author')->with('user')->get();
        Mail::to($author->email)->send(new ContactFormMail($data));
        return response()->json(['Vaše zpráva byla odeslána']);
    }

    public function rules()
    {
        return [
            'email' => 'required',
            'reason' => 'required',
            'message' => 'required',
        ];
    }
}
