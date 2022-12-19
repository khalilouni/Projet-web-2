<?php

namespace App\Http\Controllers;

use App\Models\Modele;
use App\Models\Voiture;
use App\Models\Photo;
use Illuminate\Http\Request;

class VoitureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $voitures = Voiture::with('modele',
            'transmission',
            'carburant',
            'carrosserie',
            'modele.constructeur',
            'photos')->get();
        return response()->json($voitures);

    }

    public function filtre(Request $request)
    {
        $constucteur = $request->input('constructeur');
        $modele = $request->input('modele');
        $annee = $request->input('annee');

        if(empty($modele)) {
            $voituresTire = Voiture::with('modele',
                'transmission',
                'carburant',
                'carrosserie',
                'modele.constructeur',
                'photos')->where('constructeurId', $constucteur)->get();
        }

       else {
           $voituresTire = Voiture::with('modele',
               'transmission',
               'carburant',
               'carrosserie',
               'modele.constructeur',
               'photos')->where('modeleId', $modele)->get();
       }



        return response()->json([
            "errno" => 0, "errmsg" => "succès de connexion","data" => [
                "voitureInfo" => $voituresTire
            ]
        ]);
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $prixVente = $request->prix + ($request->prix)/4;

        $nouvelleVoiture = Voiture::create([

            'date_arrivee' => $request->date_arrivee,
            'prix' => $prixVente,
            'modeleId' => $request->nom_modele,
            'transmissionId' => $request->transmissionId,
            'carburantId' => $request->carburantId,
            'carrosserieId' => $request->carroserieId,
            'kilometrage' => $request->kilometrage,
            'statutId' => 3
            
        ]);

        return response()->json([
            'voiture' => $nouvelleVoiture,
            'message' => 'voiture enregistrer avec succes'
        ], 200);




    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Voiture $voiture
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $voiture = Voiture::with('modele',
            'transmission',
            'carburant',
            'carrosserie',
            'modele.constructeur',
            'photos')->find($id);
        return response()->json($voiture);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Voiture $voiture
     * @return \Illuminate\Http\Response
     */
    public function edit(Voiture $voiture)
    {
        $voiture = Voiture::find($voiture);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Voiture $voiture
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request,  $id)
    {

        $voiture = Voiture::find($id);

        $voiture->update([
            'date_arrivee' => $request->date_arrivee,
            'prix' => $request->prix,
            'kilometrage '=> $request->kilometrage,
            'modeleId' => $request->nom_modele,
            'transmissionId' => $request->transmissionId,
            'carburantId' => $request->carburantId,
            'carrosserieId' => $request->carrosserieId,
        ]);

        return response()->json([
            'voiture' => $voiture,
            'message' => 'voiture modifier avec succes'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Voiture $voiture
     * @return \Illuminate\Http\Response
     */
    public function destroy(Voiture $voiture)
    {
        Photo::where('voitureId', $voiture->id)->delete();
        $voiture->delete();
        return response()->json('voiture supprimer');
    }

    public function reserverVoiture ($id) {

        
        $voiture = Voiture::where('id', $id)->get();
        $voiture[0]->update([
            'statutId' => 2
        ]);
        return response()->json([
            'voiture' => $voiture,
            'message' => 'voiture reserver avec succes'
        ], 200);


    }


}
