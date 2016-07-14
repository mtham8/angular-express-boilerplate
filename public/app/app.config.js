(function () {
  'use strict';

  angular
    .module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('landing')

    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: '/app/landing/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
  }

})();
