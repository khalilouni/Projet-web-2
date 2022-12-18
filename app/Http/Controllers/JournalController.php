<?php

namespace App\Http\Controllers;

use App\Models\Journal_connexion;
use App\Models\User;

class JournalController extends Controller
{
    public function index() {
        $form = User::with('connexions')->get();

        //Retour les messages
        return response()->json([
            'errno' => 0, 'errmsg' => 'succès', 'data' => [
                'connexionInfo' => $form
            ]
        ]);
    }
}
