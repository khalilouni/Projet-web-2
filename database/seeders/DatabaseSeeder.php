<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

/* import des modeles */
use App\Models\Carburant;
use App\Models\Carrosserie;
use App\Models\Constructeur;
use App\Models\Transmission;
use App\Models\Modele;
use App\Models\Voiture;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /* Faker pour créer des données dans la base de donnée */
        $faker = \Faker\Factory::create();

        /* créer un utilisateur */
/*         User::create([
            'name' => 'Alex',
            'email' => 'alex@alex.com',
            'password' => Hash::make('password'),
        ]);
 */
        /* créer les carburants */
        Carburant::create([
            'type' => 'Essence'
        ]);
        Carburant::create([
            'type' => 'Diesel'
        ]);
        Carburant::create([
            'type' => 'Hybride'
        ]);        
        Carburant::create([
            'type' => 'Electrique'
        ]);

        /* créer les carrosseries */
        Carrosserie::create([
            'type' => 'VUS'
        ]);
        Carrosserie::create([
            'type' => 'Cabriolet'
        ]);
        Carrosserie::create([
            'type' => 'Coupe'
        ]);
        Carrosserie::create([
            'type' => 'Camion'
        ]);
        Carrosserie::create([
            'type' => 'Berline'
        ]);
        Carrosserie::create([
            'type' => 'Break'
        ]);

        /* créer les constructeurs */
        Constructeur::create([
            'id' => 1,
            'nom' => 'Dodge'
        ]);
        Constructeur::create([
            'id' => 2,
            'nom' => 'BMW'
        ]);
        Constructeur::create([
            'id' => 3,
            'nom' => 'KIA'
        ]);
        Constructeur::create([
            'id' => 4,
            'nom' => 'Audi'
        ]);
        Constructeur::create([
            'id' => 5,
            'nom' => 'Volkswagen'
        ]);
        Constructeur::create([
            'id' => 6,
            'nom' => 'Mercedes'
        ]);
        Constructeur::create([
            'id' => 7,
            'nom' => 'Toyota'
        ]);
        Constructeur::create([
            'id' => 8,
            'nom' => 'Honda'
        ]);

        /* créer les transmissions */
        Transmission::create([
            'type' => 'FWD'
        ]);
        Transmission::create([
            'type' => 'AWD'
        ]);
        Transmission::create([
            'type' => 'RWD'
        ]);

        /* créer les modeles */
        Modele::create([
            'constructeurId' => 4,
            'nom' => 'A5',
            'annee' => 2004
        ]);
        Modele::create([
            'constructeurId' => 7,
            'nom' => 'Corolla',
            'annee' => 2000
        ]);
        Modele::create([
            'constructeurId' => 2,
            'nom' => 'M2',
            'annee' => 2018
        ]);
        Modele::create([
            'constructeurId' => 8,
            'nom' => 'Civic',
            'annee' => 2005
        ]);
        Modele::create([
            'ConstructeurId' => 6,
            'nom' => 'Classe C',
            'annee' => 2020
        ]);
        Modele::create([
            'constructeurId' => 1,
            'nom' => 'Journey',
            'annee' => 2015
        ]);
        Modele::create([
            'constructeurId' => 3,
            'nom' => 'Sportage',
            'annee' => 2017
        ]);
        Modele::create([
            'constructeurId' => 5,
            'nom' => 'Atlas',
            'annee' => 2021
        ]);

        /* créer les voitures */
        Voiture::create([
            'prix' => 25000,
            'modeleId' => 1,
            'transmissionId' => 1,
            'carburantId' => 1,
            'carrosserieId' => 1,
            'date_arrivee' => Carbon::parse('2000-01-01')
        ]);
        Voiture::create([
            'prix' => 18000,
            'modeleId' => 2,
            'transmissionId' => 2,
            'carburantId' => 2,
            'carrosserieId' => 2,
            'date_arrivee' => Carbon::parse('2022-11-04')
        ]);
        Voiture::create([
            'prix' => 11900,
            'modeleId' => 3,
            'transmissionId' => 3,
            'carburantId' => 3,
            'carrosserieId' => 3,
            'date_arrivee' => Carbon::parse('2022-10-15')
        ]);
        Voiture::create([
            'prix' => 35000,
            'modeleId' => 4,
            'transmissionId' => 1,
            'carburantId' => 4,
            'carrosserieId' => 4,
            'date_arrivee' => Carbon::parse('2022-09-25')
        ]);
        Voiture::create([
            'prix' => 15900,
            'modeleId' => 5,
            'transmissionId' => 2,
            'carburantId' => 1,
            'carrosserieId' => 5,
            'date_arrivee' => Carbon::parse('2022-11-28')
        ]);
        Voiture::create([
            'prix' => 29500,
            'modeleId' => 6,
            'transmissionId' => 3,
            'carburantId' => 2,
            'carrosserieId' => 6,
            'date_arrivee' => Carbon::parse('2022-11-25')
        ]);
        Voiture::create([
            'prix' => 24500,
            'modeleId' => 7,
            'transmissionId' => 1,
            'carburantId' => 3,
            'carrosserieId' => 1,
            'date_arrivee' => Carbon::parse('2022-10-07')
        ]);
        Voiture::create([
            'prix' => 29900,
            'modeleId' => 8,
            'transmissionId' => 2,
            'carburantId' => 4,
            'carrosserieId' => 2,
            'date_arrivee' => Carbon::parse('2022-09-14')
        ]);
    }
}