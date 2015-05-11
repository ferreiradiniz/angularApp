(function() {
    'use strict';

    angular.module('login.services', ['ngResource']);

    // .config(configResource);

    // .factory('loginService', ['$resource', loginService]);

    // function loginService($resource) {

    //     var restUrl = 'http://localhost:8080/api/logins';


    //     return $resource('', {}, {
    //         'get': {
    //             method: 'GET', params: {id: '_id'} , url: restUrl + '/:id'
    //         },
    //         'post': {
    //             method: 'POST', url: restUrl
    //         },
    //         'query': {
    //             method: 'GET',
    //             isArray: true
    //         },
    //         'delete': {
    //             method: 'DELETE', params: {id: '_id'} , url: restUrl + '/:id'
    //         }
    //     });
    // }

    // function configResource($resourceProvider) {
    //     // Don't strip trailing slashes from calculated URLs
    //     $resourceProvider.defaults.stripTrailingSlashes = false;
    // }



}());
