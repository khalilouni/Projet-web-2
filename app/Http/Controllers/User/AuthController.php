<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Stocke une ressource nouvellement créée dans le stockage..
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
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
                    'courriel' => $courrielDeUtilisateur,
                    'nomDeUtilisateur' => $nomDeUtilisateur,
                    'ipDeUtilisateur' => $utilisateurIp
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
}