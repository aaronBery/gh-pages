(function() {
    'use strict';

    angular
        .module('howToApp')
        .factory('howToFactory',howToFactory);

    function howToFactory() {
        var factory = {
            cleanse: cleanse
        };

        return factory;

        function cleanse(resultsObj) {
            //cleansing code goes here

            return resultsObj;
        }
        /* Private Methods
        ------------------------------------------------------------------*/
        function undefinedToEmpty(x,defaultVal) {
        	var defaultVal = (typeof defaultVal !== 'undefined') ? defaultVal : '';

        	if((typeof x !== 'undefined') && (x.indexOf('NULL') < 0)) {
        		return x;
        	}else {
        		return defaultVal;
        	}
        }
    }
})();
