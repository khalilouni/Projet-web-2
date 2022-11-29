<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voiture extends Model
{
    use HasFactory;

    protected $filliable = ['date_arrivee', 'prix', 'modeleId', 'transmissionId', 'carburantId', 'carrosserieId'];
    
}
