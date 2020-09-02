<?php

namespace App\Http\Controllers\Api;

use App\Amount;
use App\Http\Controllers\Controller;

class AmountController extends Controller
{

    public function update(Amount $amount)
    {
        $data = request()->validate([
            'value' => 'required|numeric|max:9999'
        ]);
        $amount->value = $data['value'];
        $amount->push();
        return $amount;
    }

    public function destroy(Amount $amount)
    {
        $amount->delete();
    }
}
