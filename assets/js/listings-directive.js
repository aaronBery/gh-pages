(function() {
    'use strict';

    angular
        .module('howToApp')
        .directive('listingsDirective', listingsDirective);

    function listingsDirective() {
        return {
            restrict: 'EA',
            template:   [
                '<p>Displaying {{ vm.resultsSummary.currEnd - (vm.resultsSummary.currStart - 1) }} result<span ng-if="vm.resultsSummary.numRanks > 1">s</span> of {{ vm.resultsSummary.fullyMatching }}</p>',
                '<ul class="result__items result__items--web">',
                  '<li ng-repeat="x in vm.results | filter: htmlToPlainText" class="result__item result__item--web">',
                    '<h3 class="result__title">',
                      '<a href="" title="{{ x.title }}" ng-click="vm.showDetail(x,\'V\')">{{ x.title }}</a>',
                    '</h3>',
                 '</li>',
                '</ul>'
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }

})();
