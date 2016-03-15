(function() {
    'use strict';

    angular
        .module('howToApp')
        .directive('facetsDirective', facetsDirective);

    function facetsDirective() {
        return {
            restrict: 'EA',
            template:   [
              '<div class="faceted-navigation">'
                ,'<li ng-repeat="categories in vm.facets | filter: htmlToPlainText">'
                  ,'<section>'
                    ,'<h4>{{ categories.name  }}</h4>'
                    ,'<ul ng-repeat="facetCategory in categories.categories">'
                      ,'<li ng-repeat="facet in facetCategory.values">'
                        ,'<input type="checkbox" ng-checked="vm.isSelected(facet.data)" value="{{ facet.queryStringParam }}" name="{{ facet.queryStringParam  }}" ng-click="vm.updateFacet(facet.data,facet.queryStringParam)" />'
                        ,'<label for="{{ facet.queryStringParam }}">'
                          ,'{{ facet.label }}'
                        ,'</label>'
                      ,'</li>'
                    ,'</ul>'
                  ,'</section>'
                ,'</li>'
              ,'</div>' 
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }

})();
