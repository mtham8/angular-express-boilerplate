(function () {
  'use strict';

  angular
    .module('app')
    .config(config)

  function config ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: './app/landing/landing.html',
        controller: 'LandingCtrl as vm'
      })

    $urlRouterProvider.otherwise('/landing');

  }

})();
