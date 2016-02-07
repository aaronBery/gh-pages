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

        getData();

        function logMe(x) {
            console.log(x);
        }

        function updatePagination(i) {
            if(vm.currentPage !== i) {
                returnToListings('','',i)
                getData();
            }
        }

        function isSelected(f) {
            return arrayFactory.findItemInArray(f,vm.selectedFacets);
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
            vm.currentPage = 0;
            vm.upi = '';
            getData();
        }
        /* Private methods
        ---------------------------------------------------------------*/
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
        }

    }

})();
