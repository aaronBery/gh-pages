(function() {
    'use strict';

    skillsService.$inject = ['$http'];

    angular
        .module('skillsApp')
        .service('skillsService',skillsService);

    function skillsService($http) {

      var service = {
        getSkillsObj: getSkillsObj
      };

      return service;

      function getSkillsObj() {
        var arr = [
          {
            id: 'angularjs'
            ,title: 'AngularJS'
            ,description: 'Lorem ipsum'
            ,image: 'https://angular.io/resources/images/logos/angular2/shield-with-beta.png'
          }
          ,{
            id: 'grunt'
            ,title: 'Grunt'
            ,description: 'Lorem ipsum'
            ,image: 'http://mattbailey.io/images/dist/tumblr_inline_mjrobcZQpo1qz4rgp.png'
          }
        ];
        return arr;
      }
    }
})();
