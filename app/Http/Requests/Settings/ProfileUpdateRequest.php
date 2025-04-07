<?php

namespace App\Http\Requests\Settings;

use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required',
            'string',
            'lowercase',
            'max:50',
            'regex:/^\S*$/u',
            Rule::unique(User::class)->ignore($this->user()->id),],
            'sponsor' => [
                'required',
                'string',
                'exists:'.User::class.',username',
            ],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
        ];
    }

    //  'name' => 'required|string|max:255',
    //         'username' => 'required|string|lowercase|max:50|regex:/^\S*$/u|unique:'.User::class,
    //         'sponsor' => 'required|exists:'.User::class.',username',
    //         'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
    //         'password' => ['required','min:8', 'confirmed', Rules\Password::defaults()],
    //         'password_confirmation' => 'required',
    //         'terms' => 'accepted',


    /**
     * Get the custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'username.regex' => 'The username must not contain spaces.',
        ];
    }
}
