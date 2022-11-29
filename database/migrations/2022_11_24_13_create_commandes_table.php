<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('quantite');
            $table->bigInteger('userId')->unsigned();
            $table->foreign('userId')->references('id')->on('users');
            $table->bigInteger('voitureId')->unsigned();
            $table->foreign('voitureId')->references('id')->on('voitures');
            $table->bigInteger('modePaiementId')->unsigned();
            $table->foreign('modePaiementId')->references('id')->on('mode_paiements');
            $table->bigInteger('expeditionId')->unsigned();
            $table->foreign('expeditionId')->references('id')->on('expeditions');
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
        Schema::dropIfExists('commandes');
    }
}
