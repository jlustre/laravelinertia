<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class PostDestroyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Post $post)
    {
      //lets delete first the image of the post
        if ($post->image) {
            Storage::disk('public')->delete($post->image);
        }

        //delete the post
        $post->delete();

        return to_route('posts.index')->with('success', 'Post deleted successfully.');

    }

}
