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
                        ,'<input type="checkbox" name="{{ facet.queryStringParam  }}" />'
                        ,'<label>'
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
