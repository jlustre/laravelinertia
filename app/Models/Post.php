<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'user_id',
        'slug',
        'image',
    ];

    /**
     * Set the title attribute and ensure it is capitalized.
     *
     * @param string $value
     * @return void
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = ucwords($value);
    }

    // Relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
