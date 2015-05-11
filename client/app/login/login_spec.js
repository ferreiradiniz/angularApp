(function() {
  'use strict';

  describe('Testando Controler Test Instalacao\n', function() {

    var $scope, vm;

    beforeEach(module('login.module'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();

      vm = $controller('LoginController', {
        $scope: $scope
      });
    }));

    it('Deve ter "test" model com 2 historicos', function() {
      expect(vm.tests).to.have.length(2);
    });
  });

}());

