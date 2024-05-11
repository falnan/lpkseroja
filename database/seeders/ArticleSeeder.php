<?php

namespace Database\Seeders;

use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        Article::truncate();

        for ($i = 0; $i < 10; $i++) {
            $title[$i] = fake()->sentence();
        }

        for ($i = 0; $i < 10; $i++) {
            Article::insert([
                'title' => $title[$i],
                'slug' => Str::slug($title[$i]),
                'date' => Carbon::now(),
                'author' => fake()->name(),
                'body' => fake()->paragraph(10),
                'picture' => $i + 1,
            ]);
        }
    }
}
