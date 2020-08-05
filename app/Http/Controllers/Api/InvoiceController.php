<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use App\Invoice;
use App\User;

class InvoiceController extends Controller
{
    public function store()
    {
        $data = request()->validate($this->rules());
        auth()->user()->invoice()->create($data);
        return auth()->user()->load('invoice');
    }


    public function update($id)
    {
        $user = User::find($id);
        $data = request()->validate($this->rules());
        $dataWithID = array_merge($data, ['user_id' => $user->id]);
        if ($user->invoice) {
            $user->invoice()->update($dataWithID);
        } else {
            $user->invoice()->create($dataWithID);
        }
        return $user->load('invoice');
    }


    public function rules()
    {
        return [
            'ic' => ['required', 'unique:invoices', 'min:7', 'numeric'],
            'dic' => ['max:255',],
            'nazev' => ['max:255',],
            'ulice' => ['required', 'max:255'],
            'mesto' => ['required', 'max:255'],
            'psc' => ['required', 'max:255'],
            'zeme' => ['required', 'max:255'],
        ];
    }
}
