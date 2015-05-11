(function() {
    'use strict';

    // angular.module('login.module', ['ui.router', 'login.services', 'login.resourceMock'])
    angular.module('login.module', ['login.services', 'ui.router'])

    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/logins');

        $stateProvider
            .state('logins', {
                url: '/logins',
                templateUrl: '/app/login/logins.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state("loginEdit", {
                url: '/logins/:id',
                templateUrl: "/app/login/loginEdit.html",
                controller: "loginControllerEdit",
                controllerAs: 'vm',
                resolve: {
                    loginResource: "loginResource",

                    login: function(loginResource, $stateParams) {
                        var id = $stateParams.id;
                        return loginResource.get({
                            id: id
                        }).$promise;
                    }
                }
            });

    }

}());
