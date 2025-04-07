<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class LegalController extends Controller
{
    public function terms()
    {
        return Inertia::render('legal/terms');
    }

    public function privacy()
    {
        return Inertia::render('legal/privacy');
    }
}
