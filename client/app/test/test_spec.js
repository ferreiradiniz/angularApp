(function() {
  'use strict';

  describe('Testando Controler Test Instalacao\n', function() {

    var $scope, vm;

    beforeEach(module('test.module'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();

      vm = $controller('TestController', {
        $scope: $scope
      });
    }));

    it('Deve ter "test" model com 3 historicos', function() {
      expect(vm.tests).to.have.length(2);
    });

  });

}());
