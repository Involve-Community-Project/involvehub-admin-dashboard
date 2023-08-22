<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Laravel\Passport\Client;

class OAuthClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create password grant client
        Client::factory()->create([
            'name' => 'Web App',
            'secret' => config('passport.password_client.web_app.secret'),
            'provider' => 'users',
            'redirect' => config('passport.password_client.web_app.redirect'),
            'personal_access_client' => false,
            'password_client' => true,
            'revoked' => false,
        ]);
    }
}
