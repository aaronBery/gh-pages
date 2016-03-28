(function() {
    'use strict';

    angular
        .module('howToApp')
        .directive('facetsDirective', facetsDirective);

    function facetsDirective() {
        return {
            restrict: 'EA',
            template:   [
              '<form class="how-to-facet-search">'
              , '<input type="text" ng-model="vm.query" placeholder="Search how to guides" />'
              ,'<ul class="suggestions">'
                ,'<li ng-repeat="suggestions in vm.suggestions" ng-click="vm.query = suggestions.disp; vm.showSuggestions = false" ng-show="vm.showSuggestions">'
                  ,'{{ suggestions.disp  }}'
                ,'</li>'
              ,'</ul>'
              ,'</form>'
              ,'<ul class="faceted-navigation">'
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
              ,'</ul>' 
            ].join(''),
            controllerAs: 'vm',
            bindToController: true
        }
    }

})();
