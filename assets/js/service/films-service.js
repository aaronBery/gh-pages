(function() {
    'use strict';

    filmsService.$inject = ['$http','FILMS_LOCATION'];

    angular
        .module('filmsApp')
        .service('filmsService',filmsService);

    function filmsService($http,FILMS_LOCATION) {

      var service = {
        getFilmsObj: getFilmsObj
      };

      return service;

      function getFilmsObj() {
        return $http.get(FILMS_LOCATION).success(
          function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            //can add some error handling here
          });
        }
    }
})();
