<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagsController extends Controller
{
    //
    public function getTags(){
        $query= request()->get('search');

        if($query == null || $query == ''){
            $tags= Tag::all();
        }else{
            $tags= Tag::where('name','LIKE',$query.'%')->get();
        }

        return response()->json($tags);
    }
}
