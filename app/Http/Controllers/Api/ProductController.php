<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return  Product::orderBy('name')->get()->map->format();
    }

    public function store(Request $request)
    {
        $data = request()->validate($this->rules());
        Product::create($data);
        return response()->json(['Produkt byl úspěšně vytvořen']);
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'category_id' => 'required',
            'hmotnost' => 'required',
        ];
    }
}
