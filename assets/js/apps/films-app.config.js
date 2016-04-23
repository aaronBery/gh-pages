/*
Author: Aaron Bery
Description: This App is built using John Papa's Angular JS style guide
https://github.com/johnpapa/angular-styleguide
Dependencies: Requires Angular less than version 2. Stable with v1.4.5
*/
(function () {
    'use strict';

    angular
        .module('filmsApp', [])
        .constant('FILMS_LOCATION','/assets/films.json');
})();
