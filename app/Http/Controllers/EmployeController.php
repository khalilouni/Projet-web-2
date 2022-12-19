<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use App\Models\User;
use Illuminate\Http\Request;


class EmployeController extends Controller
{
   public function index() {
       $form = Profil::with('utilisateur')->get();

       //Retour les messages
       return response()->json([
           'errno' => 0, 'errmsg' => 'succès', 'data' => [
               'utilisateurInfo' => $form
           ]
       ]);
   }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $utilisateur
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {

        $utilisateur = User::find($id);

        $utilisateur->update([
            'privilegeId' => $request->input('idPrivilege'),
        ]);

        return response()->json([
            'utilisateur' => $utilisateur,
            'message' => 'privilege est modifié avec succes'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $utilisateur
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($utilisateur)
    {
        $utilisateur = User::find($utilisateur);
        $utilisateur->delete();
        return response()->json('utlisateur supprimer');
    }


}
