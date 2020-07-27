<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use App\Invoice;
use App\User;

class InvoiceController extends Controller
{
    public function check()
    {
        $user = auth()->user()->load('invoice');
        return $user;
    }

    public function store()
    {
        $data = request()->validate($this->rules());
        auth()->user()->invoice()->create($data);
    }

    public function add($id)
    {
        $user = User::find($id);
        $data = request()->validate($this->rules());
        $user->invoice()->create($data);
    }

    public function update($id)
    {
        $user = User::find($id);
        $data = request()->validate($this->rules());
        $user->invoice()->update($data);
    }

    public function destroy(Invoice $invoice)
    {
        //
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
