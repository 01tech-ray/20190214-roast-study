<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Cafe extends Model
{
    //
    public function brewMethods(){
        return $this->belongsToMany(BrewMethod::class,'cafes_brew_methods','cafe_id','brew_method_id');
    }

    public function children(){
        return $this->hasMany(Cafe::class,'parent','id');
    }

    public function parent(){
        return $this->hasOne(Cafe::class,'id','parent');
    }
}
