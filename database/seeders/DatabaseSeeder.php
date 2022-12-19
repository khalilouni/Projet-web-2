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
use App\Models\Privilege;
use App\Models\Province;
use App\Models\Ville;
use App\Models\Photo;
use App\Models\Statut;
use App\Models\Profil;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        /* créer les status */

        Statut::create([
            'id' => 1,
            'nom' => 'Vendu',
        ]);

        Statut::create([
            'id' => 2,
            'nom' => 'Reserver',
        ]);

        Statut::create([
            'id' => 3,
            'nom' => 'Disponible',
        ]);

        /* créer les provinces */
        Province::create([
            'id' => 1,
            'nom' => 'Quebec',
        ]);

        Province::create([
            'id' => 2,
            'nom' => 'Ontario',
        ]);

        Province::create([
            'id' => 3,
            'nom' => 'Alberta',
        ]);
        Province::create([
            'id' => 4,
            'nom' => 'Manitoba',
        ]);
        
        Province::create([
            'id' => 5,
            'nom' => 'Nouveau-Brunswick',
        ]);

        Province::create([
            'id' => 6,
            'nom' => 'Nouvelle-Ecosse',
        ]);

        Province::create([
            'id' => 7,
            'nom' => 'Colombie-Britannique',
        ]);
        Province::create([
            'id' => 8,
            'nom' => 'Ile-du-Prince-Edouard',
        ]);
        
        Province::create([
            'id' => 9,
            'nom' => 'Saskatchewan',
        ]);

        Province::create([
            'id' => 10,
            'nom' => 'Terre-Neuve-et-Labrador',
        ]);

        /* créer les villes*/
        Ville::create([
            'id' => 1,
            'nom' => 'Montreal',
            'provinceId'=> 1
        ]);

        Ville::create([
            'id' => 2,
            'nom' => 'Laval',
            'provinceId'=> 1
        ]);

        Ville::create([
            'id' => 3,
            'nom' => 'Côte-Saint-Luc',
            'provinceId'=> 1
        ]);

        Ville::create([
            'id' => 4,
            'nom' => 'Deux-Montagnes',
            'provinceId'=> 1
        ]);

        Ville::create([
            'id' => 5,
            'nom' => 'Joliette',
            'provinceId'=> 1
        ]);

        /* créer les privileges */
        Privilege::create([
            'id' => 1,
            'nom' => 'administrateur',
        ]);
        Privilege::create([
            'id' => 2,
            'nom' => 'employe',
        ]);
        Privilege::create([
            'id' => 3,
            'nom' => 'client'
        ]);
        
        /* créer trois utilisateurs avec des priliveleges differants */
        User::create([
            'name' => 'Alex',
            'privilegeid' => 1,
            'email' => 'alex@alex.com',
            'password' => Hash::make('password'),
        ]);

        Profil::create([
            'nom' => 'Alex',
            'prenom' => 'Alex',
            'courriel' => 'alex@alex.com',
            'anniversaire' => Carbon::parse('1999-01-01'),
            'adresse' => 'Rue Alex',
            'code_postal' => 'H2J 1k3',
            'telephone' => '5144431234',
            'cellulaire' => '5144431235',
            'userId' => 1,
            'villeId' => 1
        ]);

        User::create([
            'name' => 'Tim',
            'privilegeid' => 2,
            'email' => 'tim@tim.com',
            'password' => Hash::make('password'),
        ]);

        Profil::create([
            'nom' => 'Tim',
            'prenom' => 'Tim',
            'courriel' => 'tim@tim.com',
            'anniversaire' => Carbon::parse('1999-01-01'),
            'adresse' => 'Rue Tim',
            'code_postal' => 'H2J 1k3',
            'telephone' => '5144431234',
            'cellulaire' => '5144431235',
            'userId' => 2,
            'villeId' => 2
        ]);

        User::create([
            'name' => 'Emma',
            'privilegeid' => 3,
            'email' => 'emma@emma.com',
            'password' => Hash::make('password'),
        ]);

        Profil::create([
            'nom' => 'Emma',
            'prenom' => 'Emma',
            'courriel' => 'emma@emma.com',
            'anniversaire' => Carbon::parse('1999-01-01'),
            'adresse' => 'Rue Emma',
            'code_postal' => 'H2J 1k3',
            'telephone' => '5144431234',
            'cellulaire' => '5144431235',
            'userId' => 3,
            'villeId' => 3
        ]);

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
            'id' => 4,
            'constructeurId' => 4,
            'nom' => 'A5',
            'annee' => 2004
        ]);
        Modele::create([
            'id' => 7,
            'constructeurId' => 7,
            'nom' => 'Corolla',
            'annee' => 2000
        ]);
        Modele::create([
            'id' => 2,
            'constructeurId' => 2,
            'nom' => 'M2',
            'annee' => 2018
        ]);
        Modele::create([
            'id' => 8,
            'constructeurId' => 8,
            'nom' => 'Civic',
            'annee' => 2005
        ]);
        Modele::create([
            'id' => 6,
            'ConstructeurId' => 6,
            'nom' => 'Classe C',
            'annee' => 2020
        ]);
        Modele::create([
            'id' => 1,
            'constructeurId' => 1,
            'nom' => 'Journey',
            'annee' => 2015
        ]);
        Modele::create([
            'id' => 3,
            'constructeurId' => 3,
            'nom' => 'Sportage',
            'annee' => 2017
        ]);
        Modele::create([
            'id' => 5,
            'constructeurId' => 5,
            'nom' => 'Atlas',
            'annee' => 2021
        ]);


        /* créer les voitures */
        Voiture::create([
            'id' => 1,
            'prix' => 25000,
            'modeleId' => 1,
            'kilometrage' => 9300,
            'transmissionId' => 1,
            'carburantId' => 1,
            'carrosserieId' => 1,
            'date_arrivee' => Carbon::parse('2017-01-01'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 2,
            'prix' => 18000,
            'modeleId' => 2,
            'kilometrage' => 110000,
            'transmissionId' => 2,
            'carburantId' => 2,
            'carrosserieId' => 2,
            'date_arrivee' => Carbon::parse('2022-11-04'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 3,
            'prix' => 11900,
            'modeleId' => 3,
            'kilometrage' => 130000,
            'transmissionId' => 3,
            'carburantId' => 3,
            'carrosserieId' => 3,
            'date_arrivee' => Carbon::parse('2022-10-15'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 4,
            'prix' => 35000,
            'modeleId' => 4,
            'kilometrage' => 8000,
            'transmissionId' => 1,
            'carburantId' => 4,
            'carrosserieId' => 4,
            'date_arrivee' => Carbon::parse('2022-09-25'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 5,
            'prix' => 15900,
            'modeleId' => 5,
            'kilometrage' => 12000,
            'transmissionId' => 2,
            'carburantId' => 1,
            'carrosserieId' => 5,
            'date_arrivee' => Carbon::parse('2022-11-28'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 6,
            'prix' => 29500,
            'modeleId' => 6,
            'kilometrage' => 10000,
            'transmissionId' => 3,
            'carburantId' => 2,
            'carrosserieId' => 6,
            'date_arrivee' => Carbon::parse('2022-11-25'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 7,
            'prix' => 24500,
            'modeleId' => 7,
            'kilometrage' => 95000,
            'transmissionId' => 1,
            'carburantId' => 3,
            'carrosserieId' => 1,
            'date_arrivee' => Carbon::parse('2022-10-07'),
            'statutId' => 3
        ]);
        Voiture::create([
            'id' => 8,
            'prix' => 29900,
            'kilometrage' => 15000,
            'modeleId' => 8,
            'transmissionId' => 2,
            'carburantId' => 4,
            'carrosserieId' => 2,
            'date_arrivee' => Carbon::parse('2022-09-14'),
            'statutId' => 3
        ]);


        /* creer les photos de la voiture dodge*/

        Photo::create([
            'path' => 'dodge-primary.jpg',
            'primaire' => 1,
            'voitureId' => 1,
        ]);

        Photo::create([
            'path' => 'dodge-2.jpg',
            'primaire' => 0,
            'voitureId' => 1,
            ]);

        Photo::create([
            'path' => 'dodge-3.jpg',
            'primaire' => 0,
            'voitureId' => 1,
            ]);
            
        Photo::create([
            'path' => 'dodge-4.jpg',
            'primaire' => 0,
            'voitureId' => 1,
            ]);

        /* creer les photos de la voiture BMW*/

        Photo::create([
            'path' => 'bmw-primary.jpg',
            'primaire' => 1,
            'voitureId' => 2,
        ]);

        Photo::create([
            'path' => 'bmw-2.jpg',
            'primaire' => 0,
            'voitureId' => 2,
        ]);

        Photo::create([
            'path' => 'bmw-3.jpg',
            'primaire' => 0,
            'voitureId' => 2,
        ]);

        Photo::create([
            'path' => 'bmw-4.jpg',
            'primaire' => 0,
            'voitureId' => 2,
        ]);

        /* creer les photos de la voiture KIA*/

        Photo::create([
            'path' => 'kia-primary.jpg',
            'primaire' => 1,
            'voitureId' => 3,
        ]);

        Photo::create([
            'path' => 'kia-2.jpg',
            'primaire' => 0,
            'voitureId' => 3,
        ]);

        Photo::create([
            'path' => 'kia-3.jpg',
            'primaire' => 0,
            'voitureId' => 3,
        ]);

        Photo::create([
            'path' => 'kia-4.jpg',
            'primaire' => 0,
            'voitureId' => 3,
        ]);


        /* creer les photos de la voiture audi*/

        Photo::create([
            'path' => 'audi-primary.jpg',
            'primaire' => 1,
            'voitureId' => 4,
        ]);

        Photo::create([
            'path' => 'audi-2.jpg',
            'primaire' => 0,
            'voitureId' => 4,
            ]);

            
        Photo::create([
            'path' => 'audi-3.jpg',
            'primaire' => 0,
            'voitureId' => 4,
            ]);

        Photo::create([
            'path' => 'audi-4.jpg',
            'primaire' => 0,
            'voitureId' => 4,
            ]);

        /* creer les photos de la voiture volkswagen*/

        Photo::create([
            'path' => 'volkswagen-primary.jpg',
            'primaire' => 1,
            'voitureId' => 5,
        ]);

        Photo::create([
            'path' => 'volkswagen-2.jpg',
            'primaire' => 0,
            'voitureId' => 5,
        ]);
        Photo::create([
            'path' => 'volkswagen-3.jpg',
            'primaire' => 0,
            'voitureId' => 5,
        ]);
        Photo::create([
            'path' => 'volkswagen-4.jpg',
            'primaire' => 0,
            'voitureId' => 5,
        ]);

        /* creer les photos de la voiture mercedes*/

        Photo::create([
            'path' => 'mercedes-primary.jpg',
            'primaire' => 1,
            'voitureId' => 6,
        ]);

        Photo::create([
            'path' => 'mercedes-2.jpg',
            'primaire' => 0,
            'voitureId' => 6,
        ]);

        Photo::create([
            'path' => 'mercedes-3.jpg',
            'primaire' => 0,
            'voitureId' => 6,
        ]);

        Photo::create([
            'path' => 'mercedes-4.jpg',
            'primaire' => 0,
            'voitureId' => 6,
        ]);

        /* creer les photos de la voiture toyota*/

        Photo::create([
            'path' => 'toyota-primary.jpg',
            'primaire' => 1,
            'voitureId' => 7,
        ]);

        Photo::create([
            'path' => 'toyota-2.jpg',
            'primaire' => 0,
            'voitureId' => 7,
        ]);

        Photo::create([
            'path' => 'toyota-3.jpg',
            'primaire' => 0,
            'voitureId' => 7,
        ]);

        Photo::create([
            'path' => 'toyota-4.jpg',
            'primaire' => 0,
            'voitureId' => 7,
        ]);

        /* creer les photos de la voiture Honda*/
        Photo::create([
            'path' => 'honda-primary.jpg',
            'primaire' => 1,
            'voitureId' => 8,
        ]);

        Photo::create([
            'path' => 'honda-2.jpg',
            'primaire' => 0,
            'voitureId' => 8,
        ]);

        Photo::create([
            'path' => 'honda-3.jpg',
            'primaire' => 0,
            'voitureId' => 8,
        ]);

        Photo::create([
            'path' => 'honda-4.jpg',
            'primaire' => 0,
            'voitureId' => 8,
        ]);








    }
}
