(function() {
  'use strict';

  angular
    .module('skillsApp')
    .factory('skillsFactory',skillsFactory);

  function skillsFactory() {
    var factory = {
      getSkilsObj: getSkilsObj
    };

    return factory;

    function getSkilsObj() {
      var obj;

      return obj;
    }
    /* Private Methods
    ------------------------------------------------------------------*/
  }
})();
