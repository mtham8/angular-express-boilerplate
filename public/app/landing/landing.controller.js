(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingCtrl', LandingCtrl)

  // LandingCtrl.$inject = [];

  function LandingContrl () {
    var vm = this;
    // write your code here
    vm.data = 'World!';
  }

})();
