<?php

namespace App\Http\Controllers\Api;

use App\Amount;
use App\Http\Controllers\Controller;

class AmountController extends Controller
{

    public function update(Amount $amount)
    {
        $item = request()->validate([
            'mnozstvi' => 'required|max:9999|numeric'
        ]);
        $amount->mnozstvi = $item['mnozstvi'];
        $amount->push();
    }

    public function destroy(Amount $amount)
    {
        $amount->delete();
    }
}
