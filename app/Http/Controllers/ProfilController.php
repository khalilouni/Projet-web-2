<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;
use Auth;


class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profils = Profil::all();
        return response()->json($profils);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([

            'courriel' => 'required|email',
            'nom' => 'required',
            'prenom' => 'required',
            'anniversaire' => 'required|date',
            'adresse' => 'required',
            'code_postal' => 'required',
            'villeId' => 'required',
            'telephone' => 'required',
            'cellulaire' => 'digits:10|nullable',

        ]);

        $nouveauProfil = Profil::create([

            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'anniversaire' => $request->anniversaire,
            'adresse' => $request->adresse,
            'code_postal' => $request->code_postal,
            'villeId' => $request->villeId,
            'telephone' => $request->telephone,
            'cellulaire' => $request->cellulaire,
            'userId' => 3,
            'courriel' => $request->courriel
        ]);

        return response()->json([
            'profil' => $nouveauProfil,
            'message' => 'profil enregistrer avec succes'
        ], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profil  $profil
     * @return \Illuminate\Http\Response
     */
    public function show(Profil $Profil)
    {
        $profil = Profil::find($Profil);
        return response()->json($profil);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Profil  $profil
     * @return \Illuminate\Http\Response
     */
    public function edit(Profil $Profil)
    {
        $profil = Profil::find($Profil);
        return response()->json($profil);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profil  $profil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


        $Profil = Profil::find($id);

        $request->validate([

            'courriel' => 'required|email',
            'nom' => 'required',
            'prenom' => 'required',
            'anniversaire' => 'required|date',
            'adresse' => 'required',
            'code_postal' => 'required',
            'villeId' => 'required',
            'telephone' => 'required|numeric|digits:10',
            'cellulaire' => 'numeric|digits:10|nullable',

        ]);

        $Profil->update([

            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'anniversaire' => $request->anniversaire,
            'adresse' => $request->adresse,
            'code_postal' => $request->code_postal,
            'villeId' => $request->villeId,
            'telephone' => $request->telephone,
            'cellulaire' => $request->cellulaire,
            'userId' => 3,
            'courriel' => $request->courriel

        ]);

        return response()->json($Profil);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profil  $profil
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profil $profil)
    {
        $profil->delete();
        return response()->json($profil);


    }
}
