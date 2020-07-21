<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Amount extends Model
{
    protected $fillable = ['product_id', 'mnozstvi', 'order_id'];

    public function order(): BelongsToMany
    {
        return $this->belongsToMany(Order::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function format()
    {
        return [
            'id' => $this->id,
            'mnozstvi' => $this->mnozstvi,
            'edit' => false,
            'created_at' => $this->created_at->format('d.m'),
            'product' => $this->product->format(),
        ];
    }
}
