(function() {
    'use strict';

    angular
        .module('howToApp')
        .directive('paginationDirective', paginationDirective);

    function paginationDirective() {
        return {
            restrict: 'EA',
            template:   [
                '<ul class="pagination">',
                  '<li ng-repeat="p in vm.paginationArr" class="pagination__item">',
                    '<a href="" title="Go to page {{ p }}" ng-click="vm.updatePagination(p-1)">{{ p }}</a>',
                  '</li>',
                '</ul>'
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }

})();
