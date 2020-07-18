<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->string('nazev', 100);
            $table->string('ulice', 100);
            $table->string('mesto', 100);
            $table->string('psc', 5);
            $table->enum('zeme', ['Česká republika', 'Slovensko']);
            $table->string('ic', 9)->unique();
            $table->string('dic', 13)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
