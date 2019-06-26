<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index',
        [
            'title' => "Hassana"
        ]
    );
});

Route::get('/a-propos', function () {
    return view('pages.about-us',
        [
            'title' => "À Propos"
        ]
    );
});

Route::get('/categories', function () {
    return view('pages.categories',
        [
            'title' => "Catégories"
        ]
    );
});

Route::get('/comment-ca-marche', function () {
    return view('pages.comment',
        [
            'title' => "Comment ça Marche"
        ]
    );
});

Route::get('/faire-un-don', function () {
    return view('pages.donner',
        [
            'title' => "Faire un Don"
        ]
    );
});

Route::get('/favoris', function () {
    return view('pages.favoris',
        [
            'title' => "Favoris"
        ]
    );
});

Route::get('/connexion', function () {
    return view('pages.connexion',
        [
            'title' => "Connexion"
        ]
    );
});

Route::get('/conditions', function () {
    return view('pages.conditions',
        [
            'title' => "Conditions Générales"
        ]
    );
});

Route::get('/mon-compte', function () {
    return view('pages.mon-compte',
        [
            'title' => "Mon Compte"
        ]
    );
});

Route::get('/description', function () {
    return view('pages.description',
        [
            'title' => "Description"
        ]
    );
});

Route::get('/categorie', function () {
    return view('pages.categorie',
        [
            'title' => "Categorie"
        ]
    );
});

 
//abort(404);