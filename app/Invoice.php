<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Invoice extends Model
{
    protected $fillable = [
        'user_id',
        'nazev',
        'ulice',
        'mesto',
        'psc',
        'zeme',
        'ic',
        'dic'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
