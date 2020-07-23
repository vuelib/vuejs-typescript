<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Amount extends Model
{
    protected $fillable = ['product_id', 'value', 'order_id'];

    public function order(): BelongsTo
    {
        return $this->BelongsTo(Order::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function format()
    {
        return [
            'id' => $this->id,
            'value' => $this->value,
            'edit' => false,
            'created_at' => $this->created_at->format('d.m'),
            'product' => $this->product->format(),
        ];
    }
}
