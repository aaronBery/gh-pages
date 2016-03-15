(function() {
    'use strict';

    angular
        .module('howToApp')
        .controller('howToController', howToController);

    howToController.$inject = ['$scope','howToService','arrayFactory','howToFactory'];

    function howToController($scope,howToService,arrayFactory,howToFactory) {
        var vm = this;
        vm.results = [];
        vm.selectedFacets = [];
        vm.currentPage = 0;
        vm.numRanks = 0;

        vm.logMe = logMe;

        vm.updatePagination = updatePagination;
        vm.updateFacet = updateFacet;
        vm.isSelected = isSelected;
        vm.updatePagination = updatePagination;

        getData();

        function logMe(x) {
          console.log(x);
        }

        function updatePagination(i) {
          if(vm.currentPage !== i) {
            reset(i)
            getData();
          }
        }

        function isSelected(facetObj) {
            return arrayFactory.findItemInArray(facetObj,vm.selectedFacets);
        }

        function updateFacet(facetData,facetQueryStringParam) {
            if(isSelected(facetData)) {
                vm.selectedFacets = arrayFactory.removeItemFromArray(facetData,vm.selectedFacets);
            }else {
                vm.selectedFacets.push({
                    data: facetData
                    ,queryStringParam: facetQueryStringParam
                });
            }
            reset(0);
        }
        /* Private methods
        ---------------------------------------------------------------*/
        function reset(i) {
          vm.currentPage = i;
          getData();
        }

        function getData() {
            return howToService.getHowTos(vm)
                .then(function(data) {
                    setResponseData(data);
                    return;
                })
        }
        /* Private helper methods
        ---------------------------------------------------------------*/
        function setResponseData(data) {
            vm.xhrData = data;
            vm.results = howToFactory.cleanse(data.data.response.resultPacket.results);
            vm.facets = data.data.response.facets;
            vm.resultsSummary = data.data.response.resultPacket.resultsSummary;
            vm.numRanks = vm.resultsSummary.numRanks;
            vm.pageCount = Math.ceil(vm.resultsSummary.fullyMatching  / vm.resultsSummary.numRanks);
            vm.paginationArr = [];
            var i;
            for(i=1;i<=vm.pageCount;i++) {
                vm.paginationArr.push(i);
            }
            console.log(vm.resultsSummary);
        }

    }

})();
