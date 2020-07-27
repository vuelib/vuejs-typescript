<?php

namespace App\Http\Controllers;

use App\Amount;
use App\Http\Resources\Order as OrderResource;
use App\Mail\OrderFormMail;
use App\Mail\AdminOrderFormMail;
use App\Order;
use App\User;
use App\Role;
use Illuminate\Support\Facades\Mail;

class OrderAdminController extends Controller
{

    public function index()
    {
        $this->isAdmin();
        $orders = Order::orderBy('id', 'DESC')->with('user.invoice')->paginate(10);
        return OrderResource::collection($orders);
    }

    public function store($id)
    {
        $this->isAdmin();
        $user = User::find($id);
        $data = request()->validate($this->rules());
        $order = $user->orders()->create();
        foreach ($data['order'] as $prodId => $value) {
            $mnozstvi = Amount::create(['product_id' => $prodId, 'mnozstvi' => $value]);
            $order->amounts()->attach($mnozstvi->id);
        }
        $order->load('amounts.product');
        return new OrderResource($order);
    }


    public function show(Order $order)
    {
        $this->isAdmin();
        $order->load('amounts.product');
        return new OrderResource($order);
    }

    public function confirm(Order $order)
    {
        $user = User::find($userId);
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
        $this->isAdmin();
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
