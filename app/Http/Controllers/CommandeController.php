<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\Facture;
use Illuminate\Http\Request;
use Carbon\Carbon;


class CommandeController extends Controller
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
        
        $nouvelleCommande = Commande::create([
            'date' => Carbon::today()->toDateString(),
            'voitureId' => $request->voitureId,
            'quantite' => 1,
            'userId' => 1,
            'modePaiementId' => 1,
            'expeditionId' => $request->expedition,
            'statutId' => 1,
 
        ]);

        $id = $nouvelleCommande->id;
        $nouvelleFacture = Facture::create([
            'commandeId' => $id,
            'date' => Carbon::today()->toDateString()
        ]);

        return response()->json([
            'commande' => $nouvelleCommande,
            'facture' => $nouvelleFacture,
            'message' => 'commande passer avec succes'
        ], 200);
        //return response()->json($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Commande  $commande
     * @return \Illuminate\Http\Response
     */
    public function show(Commande $commande)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Commande  $commande
     * @return \Illuminate\Http\Response
     */
    public function edit(Commande $commande)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Commande  $commande
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Commande $commande)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Commande  $commande
     * @return \Illuminate\Http\Response
     */
    public function destroy(Commande $commande)
    {
        //
    }
}
