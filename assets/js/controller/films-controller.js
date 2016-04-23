(function() {
    'use strict';

    angular
        .module('filmsApp')
        .controller('filmsController', filmsController);

    filmsController.$inject = ['$scope', 'filmsService'];

    function filmsController($scope,filmsService) {
      var vm = this;
      vm.films = [];

      getFilms();

      function getFilms() {
        return filmsService.getFilmsObj()
          .then(function(data) {
            vm.films = data.data;
            return;
          })
      }
    }

})();
