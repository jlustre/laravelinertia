<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        //get the value of sp from the url
        $sp_id = request()->query('sp');
        //sp is the sponsor id then search for the user
        $sp = User::where('id', $sp_id)->first();

        $warning = null;
        
        if (null !== session('sponsor_username')) {
          $sponsor = session('sponsor_username');
        } else {
          $sponsor = null;
        }
        //if the sponsor is not found then set the error message
        if (!isset($sp)) {
            $warning = 'Please use the registration link from your sponsor to guarantee correct sponsor assignment.';
        } else {
          //if the sponsor is found then check if the user is active
          if ($sp->status != 'active') {
            $warning = 'The sponsor you are trying to register under is not active. Please contact your sponsor for more information.';
          } else {
            //save the sponsor username in the session
            session(['sponsor_username' => $sp?->username]);
            //Get the value of the sponsor from the session
            $sponsor = session('sponsor_username');
          }
        }


        //if the sponsor is not found then set the error message
        if (!isset($sponsor)) {
            $warning = 'Please use the registration link from your sponsor to guarantee correct sponsor assignment.';
        }

        //pass the sponsor and error to the view
        return Inertia::render('auth/register', [
            'sponsor' => $sp?->username,
            'warning' => $warning, // Pass error to the view
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|lowercase|max:50|regex:/^\S*$/u|unique:'.User::class,
            'sponsor' => ['nullable', 'string', 'max:255'], // Validate sponsor field
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required','min:8', 'confirmed', Rules\Password::defaults()],
            'password_confirmation' => 'required',
            'terms' => 'accepted',

        ], [
            'username.regex' => 'The username must not contain spaces.',
        ]);

        //get the user_id of the sponsor
        $sponsor = User::where('username', $request->sponsor)->first();

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'sponsor_id' => $sponsor->id,
            'password' => Hash::make($request->password),
            'sponsor' => $request->input('sponsor'), // Save sponsor field
        ]);

        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard');
    }
}
