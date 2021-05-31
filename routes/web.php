<?php

use App\Http\Controllers;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('login');
// });
// Route::get('/login', function () {
//     return view('login');
// })->name('user.login');
// Route::get('/register', function () {
//     return view('register');
// })->name('user.register');
// Route::post('/login',[LoginController::class, 'login'])->name('user.login');
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');