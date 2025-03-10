<?php

namespace App\Http\Controllers;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $posts = $request->user()->posts()->latest()->get();

        return Inertia::render('posts/index', [
            'posts' => PostResource::collection($posts),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return inertia('posts/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // $data['user_id'] = $request->user()->id;
        $data['slug'] = str($data['title'])->slug('-');
        if ($request->hasFile('image')){
            $data['image'] = Storage::disk('public')->put('posts', $request->file('image'));
        }

        $request->user()->posts()->create($data);

        return to_route('posts.index')->with('success', 'Post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia('posts/edit', [
            'currentPost' => new PostResource($post),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data['slug'] = str($data['title'])->slug('-');

        if ($request->hasFile('image')){
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
            $data['image'] = Storage::disk('public')->put('posts', $request->file('image'));
        }

        $post->update($data);

        return to_route('posts.index')->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
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
