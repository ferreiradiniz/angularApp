(function() {
  'use strict';

  angular.module('login.module')
    .controller('LoginController', ['loginResource',LoginController]);


  // LoginController.$inject = ['loginResource'];

  function LoginController(loginResource) {
    var vm = this;

    vm.logins = [];


    // console.log(loginResource);

    loginResource.query(function(data){
      console.log(data);
      vm.logins = data;
    });




    // vm.logins = loginService.query($routeParams);
  }

}());
