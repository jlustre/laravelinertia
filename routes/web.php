<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LegalController;

Route::get('/', function () { return Inertia::render('welcome'); })->name('home');
Route::get('/terms', [LegalController::class, 'terms'])->name('terms');
Route::get('/privacy', [LegalController::class, 'privacy'])->name('privacy');

// Route::get('/login', function () { return Inertia::render('login'); })->name('login');
// Route::get('/register', function () { return Inertia::render('register'); })->name('register');
// Route::get('/forgot-password', function () { return Inertia::render('forgot-password'); })->name('forgot-password');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('posts', PostController::class);

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
