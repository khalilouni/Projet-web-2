<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modele extends Model
{
    use HasFactory;

    protected $filliable = ['nom', 'annee', 'constructeurId'];

    public function constructeur(){
        /* ici hasOne */
        return $this->hasOne
        ('App\Models\Constructeur','id','constructeurId');
    }
}
