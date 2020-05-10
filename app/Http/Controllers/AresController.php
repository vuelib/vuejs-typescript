<?php

namespace App\Http\Controllers;

use App\Http\Resources\Ares as AresResource;
use App\Module\Ares;

class AresController extends Controller
{

    public function check()
    {
        $data = request()->validate($this->rules());
        $ares = new ARES($data['ic']);
        $aresData = $ares->getData();

        if ($aresData) {
            return new AresResource($aresData);
        }
        return response()->json(['errors' => ['ic' => ['Zadané IČ neexistuje v ARESU.']]], 422);

    }

    public function rules()
    {
        return [
            'ic' => ['required', 'unique:invoices', 'min:7', 'numeric'],
        ];
    }
}
