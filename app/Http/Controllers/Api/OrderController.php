<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Amount;
use App\Events\OrderAdded;
use App\Mail\AdminOrderFormMail;
use App\Mail\OrderFormMail;
use App\Order;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{

    public function index()
    {
        $this->authorize('create', Order::class);
        $order = Order::where('user_id', auth()->user()->id)
            ->orderBy('created_at', 'desc')->paginate(10);
        $order->setCollection(
            $order->getCollection()->map->format()
        );
        return $order;
    }

    public function store(Request $request)
    {
        $this->authorize('create', Order::class);
        $data = request()->validate($this->rules());
        if (isset($data['user_id'])) {
            $user = User::find($data['user_id']);
            $order = $user->orders()->create();
        } else {
            $order =  auth()->user()->orders()->create();
        }
        foreach ($data['amounts'] as $product) {
            $product = array_merge($product, [
                'product_id' => $product['id'],
                'order_id' => $order->id,
            ]);
            Amount::create($product);
        }
        $orderFormat = Order::find($order->id);
        return $orderFormat->formatedRelatinship();
    }


    public function show(Order $order)
    {
        $this->authorize('view', Order::class);
        return $order->formatedRelatinship();
    }

    public function update(Order $order)
    {
        // $this->authorize('update', Order::class);
        $data = request()->validate($this->rules());
        $amounts = collect($data['amounts']);
        $deleteAmounts = collect($data['delete']);
        $deleteAmounts->map(function ($a) {
            Amount::find($a['amount_id'])->delete();
        });
        $amounts->map(function ($a) use ($order) {
            Amount::updateOrCreate([
                'id' => isset($a['amount_id']) ? $a['amount_id'] : '',
                'product_id' => $a['id'],
                'order_id' => $order['id'],
            ], ['value' =>  $a['value'],]);;
        });
        // broadcast(new OrderAdded($order));
        return $order;
    }

    public function confirm(Order $order)
    {
        $user = auth()->user();
        $data = request()->validate([
            'description' => ''
        ]);
        $order->update(['status' => 1, 'description' => request()->description]);
        $url = env('APP_URL') . 'objednavky/' . $order->id;
        // Mail::to($user->email)->send(new OrderFormMail($user, $order, $url));
        // Mail::to(env('ADMIN_EMAIL'))->send(new AdminOrderFormMail($user, $order, $url));
        //        broadcast(new OrderAdded($order));
        return $order->formatedRelatinship();
    }

    public function destroy(Order $order)
    {
        $order->delete();
    }

    public function rules()
    {
        return [
            'amounts' => 'required',
            'amounts.*.value' => 'numeric',
            'delete' => '',
            'user_id' => ''
        ];
    }
}
