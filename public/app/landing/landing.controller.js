(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingCtrl', LandingCtrl)

  function LandingCtrl () {
    var vm = this;
    vm.data = 'World!';
  }

})();
