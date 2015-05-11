(function(){
  'use strict';

  angular.module('login.services')
  .factory('loginResource', ['$resource', loginResource]);

  function loginResource($resource){

    return $resource('http://localhost:8080/api/logins/:id');
  }

}());

