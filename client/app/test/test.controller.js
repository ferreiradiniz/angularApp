(function() {
  'use strict';

  angular.module('test.module')
    .controller('TestController', [TestController]);

  function TestController() {
    var vm = this;

    vm.tests = [{
      nome: 'test1'
    }, {
      nome: 'test2'
    }];
  }

}());
