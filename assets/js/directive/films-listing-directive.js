(function() {
    'use strict';

    angular
        .module('filmsApp')
        .directive('filmsDirective', filmsDirective);

    function filmsDirective() {
        return {
            restrict: 'EA',
            template:   [
              '<form>',
                '<input type="text" ng-model="filmSearch" placeholder="Search for Films" />',
              '</form>',
              '<ul>',
                '<li ng-repeat="film in vm.films | filter: filmSearch | orderBy: \'name\'">',
                  '{{ film.name }}',
                '</li>',
              '</ul>'
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }
})();
