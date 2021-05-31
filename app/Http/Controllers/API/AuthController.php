<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UpdateRequest;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
class AuthController extends Controller
{
    


    public function register(RegisterRequest $request)
    {
        $validated = $request->validated();
        $validated['password'] = bcrypt($validated['password']);
        $user = User::create($validated);
        return response()->json(['user' => $user, 'msg' => 'register completed'], 200);
    }
    public function login(LoginRequest $request)
    {
        $validated = $request->validated();
        if (Auth::attempt($validated)) {
            $user  = auth()->user();
            $token = $user->createToken('phu')->plainTextToken;
            return response()->json(['user'=>$user, 'token' =>$token, 'status' => true]);
        }
        else {
            return response()->json(['msg'=>'Login failed', 'status' => false],400);
        }
    }

    public function getUser() {
        $user = User::all();
        return response()->json(['user'=>$user]);
    }
    public function updateUser(UpdateRequest $request, $id) {
        $validated = $request->validated();
        $user = User::findOrFail($id);
        $user->update($validated);
        return response()->json(['user' => $user, 'msg'=>'successfully updated', 'status' => true]);
    }

    public function delete($id)
    {
      $user = User::find($id);
      $user->delete();
      return response()->json(['msg'=>'successfully deleted', 'status' => true]);
    }
    public function logout(Request $request)
    {

        $user = $request->user();
        $user->tokens()->delete();
        // $request->user()->currentAccessToken()->delete();
        return response()->json(['msg'=>'successfully logout', 'status' => true]);
    }
    
}
