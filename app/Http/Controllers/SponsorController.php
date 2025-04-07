<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SponsorController extends Controller
{
    public function show($id)
    {
        $sponsor = User::find($id);

        if (!$sponsor) {
            return response()->json(['error' => 'Sponsor not found'], 404);
        }

        return response()->json(['username' => $sponsor->username]);
    }
}
