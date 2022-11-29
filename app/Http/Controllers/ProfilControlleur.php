<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;

class ProfilControlleur extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'courriel' => 'required|email|unique:profils',
            'nom' => 'required',
            'prenom' => 'required',
            'anniversaire' => 'required|date_format:m/d/Y',
            'adresse' => 'required',
            'code_postal' => 'required',
            'ville' => 'required',
            'telephone' => 'required|numeric|digits:10',
            'cellulaire' => 'required|numeric|digits:10',
        ]);

        $nouveauProfil = Profil::create([

            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'anniversaire' => $request->anniversaire,
            'adresse' => $request->adresse,
            'code_postal' => $request->code_postal,
            'ville' => $request->ville,
            'telephone' => $request->telephone,
            'cellulaire' => $request->cellulaire,
            'userId' => $request->userId,
            'villeId' => $request->villeId
        ]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profil  $profil
     * @return \Illuminate\Http\Response
     */
    public function show(Profil $profil)
    {
        //
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

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profil  $profil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Profil $profil)
    {
        $request->validate([
            'courriel' => 'required|email|unique:profils',
            'nom' => 'required',
            'prenom' => 'required',
            'anniversaire' => 'required|date_format:m/d/Y',
            'adresse' => 'required',
            'code_postal' => 'required',
            'ville' => 'required',
            'telephone' => 'required|numeric|digits:10',
            'cellulaire' => 'required|numeric|digits:10',
        ]);

        $profil->update([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'anniversaire' => $request->anniversaire,
            'adresse' => $request->adresse,
            'code_postal' => $request->code_postal,
            'ville' => $request->ville,
            'telephone' => $request->telephone,
            'cellulaire' => $request->cellulaire
        ]);


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
    }
}
