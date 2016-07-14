(function () {
  'use strict';

  angular
    .module('app')
    .factory('LandingFactory', LandingFactory);

  LandingFactory.$inject = [];

  function LandingFactory () {

    var stateObj = {};

    var factory = {
      functionName: functionName
    }

    return factory;

    function functionName () {
      console.log('inside LandingFactory')
    }

  }

})();
