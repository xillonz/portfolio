<?php

namespace App\Providers;

use Statamic\Statamic;
use Statamic\StaticSite\SSG;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Statamic::vite('app', [
        //     'resources/js/cp.js',
        //     'resources/css/cp.css',
        // ]);

        SSG::after(function () {
            $from = public_path('assets');
            $to = config('statamic.ssg.destination').'/assets';
        
            app('files')->copyDirectory($from, $to);

            $from = public_path('sp');
            $to = config('statamic.ssg.destination').'/sp';
        
            app('files')->copyDirectory($from, $to);

            $from = public_path('domain').'/CNAME';
            $to = config('statamic.ssg.destination').'/CNAME';
        
            app('files')->copy($from, $to);
        });
    }
}
