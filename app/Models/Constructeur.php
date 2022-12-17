<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Modele;

class Constructeur extends Model
{
    use HasFactory;

    protected $fillable = ['nom'];

    public function modeleInfo() {
        return $this->hasMany(Modele::class,constructeurId,id);
    }


}
