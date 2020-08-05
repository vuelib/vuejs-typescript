<?php

use App\User;
use App\Role;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $devRole = Role::where('name', 'developer')->first();
        $adminRole = Role::where('name', 'admin')->first();
        $authRole = Role::where('name', 'author')->first();
        $developer = User::create([
            'phone' => 607061065,
            'role_id' => $devRole->id,
            'email' => 'kudlickatomas95@gmail.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        $owner = User::create([
            'phone' => 600500500,
            'role_id' => $adminRole->id,
            'email' => 'owner@owner.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        factory(User::class, 10)->create();
    }
}
