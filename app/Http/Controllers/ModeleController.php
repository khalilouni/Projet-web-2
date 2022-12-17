<?php

namespace App\Http\Controllers;

use App\Models\Modele;
use Illuminate\Http\Request;

class ModeleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $modeles = Modele::all();
        return response()->json($modeles);

    }

    public function modelesListe(Request $request, $id) {
        $modelesListe = Modele::where('constructeurId',$id)->orderBy('nom')->get();
        return response()->json($modelesListe);
    }

}
