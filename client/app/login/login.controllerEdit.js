(function(){
  'use strict';

  angular.module('login.module')
    .controller('loginControllerEdit', ['login', '$state', loginControllerEdit]);

  function loginControllerEdit(login, $state) {
    var vm = this;

    vm.login = login;

  }
}());
