<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Journal_connexion;
use App\Models\User;
use App\Models\Profil;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AuthController extends ApiController
{
    public function __construct() {
        $this->middleware('auth:api',['only' => ['utilisateur'],]);
    }


    public function utilisateur() {
        $utilisateur =Auth::guard('api')->user();
        return $this->reussite($utilisateur);
    }

    /**
     * Enregistrer un utilisateur.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function inscrire(Request $requete)
    {

        //Obtenir les paramètres
        $courrielDeUtilisateur = $requete->input('courriel');
        $nomDeUtilisateur = $requete->input('nom');
        $motDePasse = $requete->input('motDePasse');

        //Vérifiez que le paramètre est vide
        if (empty($courrielDeUtilisateur) || empty($nomDeUtilisateur) || empty($motDePasse)) {
            return response()->json([
                'errno' => 401, 'errmsg' => 'Erreur de paramètre'
            ]);
        }

        //Vérifier que l'utilisateur existe
        $utilisateur = $this->obtenirParCourrielDeUtilisateur($courrielDeUtilisateur);
        if (!is_null($utilisateur)) {
            return response()->json([
                'errno' => 704, 'errmsg' => 'email de l\'utilisateur a été enregistrée.'
            ]);
        }

        //Créez une nouvelle instance d'utilisateur après un enregistrement valide.
        $utilisateur = new User;
        $utilisateur->email = $courrielDeUtilisateur;
        $utilisateur->name = $nomDeUtilisateur;
        $utilisateur->password = Hash::make($motDePasse);
        $utilisateurIp = $requete->getClientIp();
        $utilisateur->save();

        //Retour les messages
        return response()->json([
            'errno' => 0, 'errmsg' => 'succès de l\'inscription', 'data' => [
                'token' => '',
                'utilisateurInfo' => [
                    'id' => $utilisateur->id,
                    'courriel' => $courrielDeUtilisateur,
                    'nomDeUtilisateur' => $nomDeUtilisateur,
                    'ipDeUtilisateur' => $utilisateurIp
                ]
            ]
        ]);
    }

    /**
     * Module de connexion utilisateur.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function login(Request $request) {

        //Obtenir le nom d'utilisateur et le mot de passe
        $courrielDeUtilisateur = $request->input('courriel');
        $motDePasse = $request->input('motDePasse');

        //Verification des données
        if(empty($courrielDeUtilisateur) || empty($motDePasse)) {
            return response()->json([
                'errno' => 401, 'errmsg' => 'Erreur de paramètre'
            ]);
        }

        //Vérifier que l'utilisateur existe
        $utilisateur = $this->obtenirParCourrielDeUtilisateur($courrielDeUtilisateur);
        if (is_null($utilisateur)) {
            return response()->json([
                'errno' => 704, 'errmsg' => 'L\'adresse courriel de l\'utilisateur n\'existe pas'
            ]);
        }

        //Vérifier le mot de passe
        $isPasse= Hash::check($motDePasse,$utilisateur->getAuthMotDePasse());
        if(!$isPasse) {
            return response()->json([
                'errno' => 705, 'errmsg' => 'Le mot de passe du compte est incorrect'
            ]);
        }

        //mettre à jour les informations de connexion
        if(!$utilisateur->save()) {
            return response()->json([
                'errno' => 505, 'errmsg' => 'Échec de la mise à jour des informations de connexion'
            ]);
        }

        //Obtenir le token
        $token = Auth::guard('api')->login($utilisateur);

        //Vérifier que le profil de l'utilisateur existe
        $profil = $this->obtenirParIdDeUtilisateur($utilisateur->id);
        $hasProfil = false;
        if (!is_null($profil) || $utilisateur->privilegeId == 1) {
          $hasProfil = true;
        }

        //créer un enregistrement de connexion
        $connexion = new Journal_connexion;
        $connexion->ip = $request->getClientIp();
        $connexion->date = Carbon::now('America/Toronto')->toDateTimeString();
        $connexion->userId = $utilisateur->id;
        $connexion->save();

        //Les données utilisateur sont assemblées et renvoyées
        return response()->json([
            "errno" => 0, "errmsg" => "succès de connexion","data" => [
                "token" => $token,
                "utilisateurInfo" => [
                    "courriel" => $courrielDeUtilisateur,
                    'idUtilisateur' => $utilisateur->id,
                    "nomDeUtilisateur" => $utilisateur->name,
                    'hasProfil' => $hasProfil,
                    'privilege' => $utilisateur->privilegeId
                ]
            ]
        ]);

    }


    /**
     * Obtenir des utilisateurs en fonction de l'e-mail de l'utilisateur.
     *
     * @param  $courriel
     * @return User | null | Model
     */
    protected function obtenirParCourrielDeUtilisateur($courriel)
    {
        return User::query()->where('email', $courriel)->first();
    }

    protected function obtenirParIdDeUtilisateur($id) {
        return Profil::query()->where('userId', $id)->first();
    }
}
