<?php

namespace App\Http\Controllers\Api\Admin;

use App\Amount;
use App\Mail\OrderFormMail;
use App\Mail\AdminOrderFormMail;
use App\Order;
use App\User;
use App\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{



    public function all()
    {

        $order = Order::where('status', 'LIKE',  request('filter'))
            ->orderBy('created_at', 'desc')->paginate(10);
        $order->setCollection(
            $order->getCollection()->map->format()
        );
        return $order;
    }

    public function index(User $user)
    {
        $this->authorize('create', Order::class);
        $order = Order::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')->paginate(10);
        $order->setCollection(
            $order->getCollection()->map->format()
        );
        return $order;
    }

    public function store($id)
    {
        $user = User::find($id);
        $data = request()->validate($this->rules());
        $order = $user->orders()->create();
        foreach ($data['order'] as $prodId => $value) {
            $mnozstvi = Amount::create(['product_id' => $prodId, 'mnozstvi' => $value]);
            $order->amounts()->attach($mnozstvi->id);
        }
        $order->load('amounts.product');
        return $order;
    }


    public function show(Order $order)
    {
        $order->load('amounts.product');
        return $order;
    }

    public function confirm(Order $order)
    {
        $user = User::find(1);
        $data = request()->validate([
            'desc' => ''
        ]);
        $order->description = request()->input('desc');
        $order->status = 1;
        $order->push();
        $author = Role::find('author')->with('user')->get();

        $url = 'http://127.0.0.1:8000/objednavky/' . $order->id;
        Mail::to($user->email)->send(new OrderFormMail($user, $order, $url));
        Mail::to($author->email)->send(new AdminOrderFormMail($user, $order, $url));
        return response()->json('Vaše objednávka byla potvrzena');
    }

    public function destroy(Order $order)
    {
        $order->delete();
    }

    public function rules()
    {
        return [
            'order' => 'required',
            'order.*' => 'numeric',
        ];
    }
}
