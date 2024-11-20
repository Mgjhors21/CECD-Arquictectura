let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/form.js', 'public/js') // Asegúrate de incluir form.js
   .sass('resources/sass/app.scss', 'public/css');
