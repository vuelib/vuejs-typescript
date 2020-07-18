<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Category;
use App\Events\ItemAdded;
use App\Events\ItemDeleted;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $categories->load('products');
        //        broadcast(new ItemAdded($categories));
        return $categories;
    }

    public function store(Request $request)
    {
        $data = request()->validate($this->rules());
        if (request('image')) {
            $imagePath = request('image')->store('category', 'public');
            $image = Image::make(public_path("storage/{$imagePath}"));
            $image->save();

            $imageArray = ['image' => $imagePath];
        }
        Category::create(array_merge(
            $data,
            $imageArray ?? []
        ));

        broadcast(new ItemAdded());
        return response('success');
    }

    public function show(Category $category)
    {
        $category->load('products');
        return $category;
    }

    public function update(Request $request, Category $category)
    {
        $data = request()->validate($this->rules());
        if (request('image')) {
            $image = $request->get('image');
            $imageName = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->get('image'))->save(public_path('images/') . $imageName)->fit(1000, 1000);
            $imagePath = "/images/" . $imageName;
            $imageArray = ['imagePath' => $imagePath];
        }

        $category->update(array_merge(
            $data,
            $imageArray ?? []
        ));
        broadcast(new ItemAdded());
        return response('success');
    }

    public function destroy(Category $category)
    {
        $category->products()->delete();
        broadcast(new ItemDeleted($category));
        $category->delete();
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'image' => 'max:10000000000',
        ];
    }
}
