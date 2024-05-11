<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MainController extends Controller
{
    public function home()
    {
        $blog = Article::orderBy('date', 'desc')
            ->paginate(4);
        return Inertia::render('home')
            ->with('blog', $blog);
    }
    public function profil()
    {
        return Inertia::render('profil');
    }
    public function program(Request $request)
    {
        $program = Article::where('body', 'like', '%' . $request->search . '%')
            ->orwhere('title', 'like', '%' . $request->search . '%')
            ->orderBy('date', 'desc')
            ->paginate(10);

        return Inertia::render('program')
            ->with('program', $program);
    }
    public function articleShow(String $id)
    {
        $article = Article::find($id);
        return Inertia::render('articleShow')
            ->with('article', $article);
    }
    public function documentation()
    {
        return Inertia::render('documentation');
    }
    public function register()
    {
        return Inertia::render('register');
    }
    public function registerPost()
    {
        session()->flash('message', 'success');
        return redirect('/');
    }
}
