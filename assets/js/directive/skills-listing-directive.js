(function() {
    'use strict';

    angular
        .module('skillsApp')
        .directive('skillsDirective', skillsDirective);

    function skillsDirective() {
        return {
            restrict: 'EA',
            template:   [
               '<p>Hello world</p>' 
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }

})();
