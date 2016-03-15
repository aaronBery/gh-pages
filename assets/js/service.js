(function() {
    'use strict';

    howToService.$inject = ['$http'];

    angular
        .module('howToApp')
        .service('howToService',howToService);

    function howToService($http) {
        var fbInstance = "funnelback-dev";
        var angularCallback = "&jsonp=JSON_CALLBACK";
        var currentCollection = "isd-howto";
        var query = "!padrenullquery";

        var service = {
            getHowTos: getHowTos
        };

        return service;

        function getHowTos(vm) {
          var fbUrl = buildFbUrl(vm);

          return $http.jsonp(fbUrl).success(
            function(data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available
              return data;
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        }

        /* Private Methods
        ----------------------------------------------------------------------*/
        function buildFbUrl(vm) {
          return "//" + fbInstance + ".ucl.ac.uk/s/search.json?collection=" + currentCollection + "&query=" + query + getMetaParams(vm.upi) + buildFacetsQryStr(vm.selectedFacets) + getStartRank(vm.currentPage,vm.numRanks) + angularCallback;
        }

        function buildFacetsQryStr(selectedFacets) {
            var str = '';
            angular.forEach(selectedFacets, function(x,i) {
                str += "&" + x.queryStringParam;
            });
            return str;
        }
        function getStartRank(currentPage,numRanks) {
            return "&start_rank=" + ((currentPage*numRanks) + 1);
        }
        function getMetaParams(upi) {
            if(typeof upi !=='undefined' && upi.length) {
                return "&meta_V_sand=" + upi;
            }else{
                return "";
            }
        }
    }
})();
