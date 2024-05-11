<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author');
            $table->date('date');
            $table->longText('body');
            $table->string('slug');
            $table->string('picture');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
