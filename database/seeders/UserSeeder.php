<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin user
        User::factory()->create([
            'name' => env('ADMIN_NAME', 'Test User'),
            'email' => env('ADMIN_EMAIL', 'test@example.com'),
            'password' => bcrypt(env('ADMIN_PASSWORD', 'password')),
            'email_verified_at' => now(),
            // 'email_verified_at' => null,
        ]);

        // Regular users
        User::factory(10)->create();
    }
}
