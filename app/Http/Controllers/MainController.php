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
        return Inertia::render('home');
    }
    public function profil()
    {
        return Inertia::render('profil');
    }
    public function program(Request $request)
    {
        return Inertia::render('program');
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
    public function privacy()
    {
        return Inertia::render('privacy');
    }
}
