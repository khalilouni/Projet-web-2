<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Photo;

class Voiture extends Model
{
    use HasFactory;

    protected $fillable = ['date_arrivee', 'prix', 'modeleId', 'transmissionId', 'carburantId', 'carrosserieId'];
    
    public function modele(){
        /* ici hasOne */
        return $this->hasOne
        ('App\Models\Modele','id','modeleId');
    }

    public function transmission(){
        /* ici hasOne */
        return $this->hasOne
        ('App\Models\Transmission','id','transmissionId');
    }

    public function carburant(){
        /* ici hasOne */
        return $this->hasOne
        ('App\Models\Carburant','id','carburantId');
    }

    public function carrosserie(){
        /* ici hasOne */
        return $this->hasOne
        ('App\Models\Carrosserie','id','carrosserieId');
    }

    public function photos()
    {
        return $this->hasMany(Photo::class, 'voitureId', 'id');
    }
}
