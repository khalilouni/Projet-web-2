<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profil extends Model
{
    use HasFactory;
    
    protected $filliable = ['nom', 'prenom', 'anniversaire', 'courriel', 'adresse', 'code_postal', 'ville', 'telephone', 'cellulaire', 'villeId'];

}
