(function() {
    'use strict';

    angular
        .module('howToApp')
        .directive('listingsDirective', listingsDirective);

    function listingsDirective() {
        return {
            restrict: 'EA',
            template:   [
                '<ul class="result__items result__items--web">',
                  '<li ng-repeat="x in vm.results | filter: htmlToPlainText" class="result__item result__item--web">',
                    '<h3 class="result__title">',
                      '<a href="" title="{{ x.title }}" ng-click="vm.showDetail(x,\'V\')">{{ x.title }}</a>',
                    '</h3>',
                    '<div ng-if="vm.isCurrentView(\'detail\')">',
                        '<p class="result__summary">{{ x.summary }}</p>',

                        '<p>{{ x.metaData["ts"] }}</p>',
                        '<p ng-if="x.metaData[\'topic\'].length">',
                            '<strong>Topic:</strong> {{ x.metaData[\'topic\'].replace("|",", ") | filter: vm.hideNull }}',
                        '</p>',
                        '<p ng-if="x.metaData[\'9\'].length">',
                            '<strong>Discipline:</strong> {{ x.metaData[\'9\'].replace("|",", ") | filter: vm.hideNull }}',
                        '</p>',
                        '<ul>',
                            '<li ng-repeat="pub in x.metaData[\'publicationsArr\']">',
                                '<ul>',
                                    '<li ng-repeat="pubItem in pub">',
                                        '<h4>',
                                            '<a href="{{ pubItem.link }}">{{ pubItem.title }}</a>',
                                        '</h4>',
                                        '<p>{{ pubItem.year }}</p>',
                                        '<p>{{ pubItem.description }}</p>',
                                    '</li>',
                                '</ul>',
                            '</li>',
                        '</ul>',
                    '</div>',
                  '</li>',
                '</ul>'
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }

})();
