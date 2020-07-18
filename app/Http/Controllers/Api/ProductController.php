<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    public function store(Request $request)
    {
        $data = request()->validate($this->rules());
        Product::create($data);
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
