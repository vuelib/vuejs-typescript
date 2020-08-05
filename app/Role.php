<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\hasOne;
use App\User;

class Role extends Model
{
    public function users(): hasOne
    {
        return $this->hasOne(User::class);
    }
}
