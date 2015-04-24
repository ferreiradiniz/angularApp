(function() {
  'use strict';

  angular.module('test.module', ['ui.router'])

  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/test');

    $stateProvider

      .state('test', {
      url: '/test',
      templateUrl: '/app/test/test.html',
      controller: 'TestController',
      controllerAs: 'vm'
    });
  }

}());
