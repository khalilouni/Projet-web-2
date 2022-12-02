<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VoitureController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\ProfilController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('voiture', VoitureController::class);
});

Route::post('v1/register', [AuthController::class,'inscrire'])->name('inscrire');

Route::post('v1/inscriptionClient', [ProfilController::class,'store'])->name('inscrire.client');

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('profil', ProfilController::class);
});



