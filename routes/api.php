<?php

use App\Http\Controllers\SponsorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {

});
//how to make sure that the user is authenticated before they can access the sponsor endpoint

Route::get('/sponsor/{id}', [SponsorController::class, 'show']); //->middleware('auth:sanctum');
