<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\User;

class Role extends Model
{
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
