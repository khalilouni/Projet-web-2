<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profil extends Model
{
    use HasFactory;
    
    protected $fillable = ['nom', 'prenom', 'anniversaire', 'courriel', 'adresse', 'code_postal', 'telephone', 'cellulaire', 'userId', 'villeId'];

}
