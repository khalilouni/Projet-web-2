<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\Facture;
use App\Models\Voiture;
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
        
        $quantite = count($request->voitures);
        $voitures = $request->voitures;

        $nouvelleCommande = Commande::create([

            'date' => Carbon::today()->toDateString(),
            'voitureId' => 1,
            'quantite' => $quantite,
            'userId' => $request->userId,
            'modePaiementId' => $request->modePaiementId,
            'expeditionId' => $request->expeditionId,
            'statutId' => 1,
 
        ]);



        $id = $nouvelleCommande->id;
        $nouvelleFacture = Facture::create([
            'commandeId' => $id,
            'date' => Carbon::today()->toDateString()
        ]);
        
        
        for ($i=0; $i < count($voitures); $i++) { 
            $voitures[$i]['id'];
            $voitureCommander = Voiture::find($voitures[$i]['id']);
            $voitureCommander->update([
                'statutId' => 1,
            ]);
        }

        return response()->json([
            'commande' => $nouvelleCommande,
            'facture' => $nouvelleFacture,
            'message' => 'commande passer avec succes et le statut des voitures est changer pour vendu id 1'
        ], 200);
        

   

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
