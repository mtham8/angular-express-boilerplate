(function () {
  'use strict';

  angular
    .module('app')
    .factory('LandingFactory', LandingFactory);

  // LandingFactory.$inject = [ 'dependency' ];

  function LandingFactory (dependency) {

    function functionName () {
      // write your code here
      return {
        functionName: functionName
      }
    }

  }

})();
