(function() {
    'use strict';

    angular
        .module('howToApp')
        .factory('arrayFactory',arrayFactory);

    function arrayFactory() {
        var factory = {
            findItemInArray: findItemInArray
            ,removeItemFromArray: removeItemFromArray
        };

        return factory;

        function findItemInArray(item,arr) {
            var status = false;
            angular.forEach(arr, function(x,i) {
                if(x.data===item) {
                    status = true;
                }
            })
            return status;
        }
        function removeItemFromArray(item,arr) {
            var pos = -1;
            angular.forEach(arr, function(x,i) {
                if(x.data===item) {
                    pos = i;
                }
            });
            if(pos > -1)arr.splice(pos,1);

            return arr;
        }

    }
})();
