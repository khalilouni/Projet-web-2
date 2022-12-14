<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVoituresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('voitures', function (Blueprint $table) {
            $table->id();
            $table->date('date_arrivee');
            $table->double('prix');
            $table->integer('kilometrage');
            $table->bigInteger('modeleId')->unsigned();
            $table->foreign('modeleId')->references('id')->on('modeles');
            $table->bigInteger('transmissionId')->unsigned();
            $table->foreign('transmissionId')->references('id')->on('transmissions');
            $table->bigInteger('carburantId')->unsigned();
            $table->foreign('carburantId')->references('id')->on('carburants');
            $table->bigInteger('carrosserieId')->unsigned();
            $table->foreign('carrosserieId')->references('id')->on('carrosseries');
            $table->bigInteger('statutId')->unsigned();
            $table->foreign('statutId')->references('id')->on('statuts');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('voitures');
    }
}
