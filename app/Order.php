<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{

    protected $fillable = ['user_id', 'description', 'status'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function amounts(): BelongsToMany
    {
        return $this->belongsToMany(Amount::class);
    }

    public function getstatusAttribute($attribute)
    {
        return [
            0 => 'rozpracovaná',
            1 => 'potvrzena',
        ][$attribute];
    }
}
