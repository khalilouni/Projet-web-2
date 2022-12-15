<?php

namespace App\Http\Controllers;

use App\Models\Constructeur;
use Illuminate\Http\Request;

class ConstructeurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $constructeurs = Constructeur::all()->sortBy('nom')->values();
        return response()->json($constructeurs);

    }


}
