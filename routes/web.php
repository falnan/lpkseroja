<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'home']);
Route::get('/profil', [MainController::class, 'profil']);
Route::get('/program', [MainController::class, 'program']);
Route::get('/artikel/{id}/{slug}', [MainController::class, 'articleShow']);
Route::get('/fasilitas', [MainController::class, 'documentation']);
Route::get('/kebijakan', [MainController::class, 'policy']);
Route::get('/daftar', [MainController::class, 'register']);
Route::post('/daftar', [MainController::class, 'registerPost']);
