(function(){
  'use strict';

  angular.module('login.resourceMock', ['ngMockE2E'])

  .run(runBlock);

  runBlock.$inject = ['$httpBackend'];

  function runBlock($httpBackend){

    var logins = [{
        "name": "Test Get",
        "password": "get123",
        "age": 32
      },{
        "name": "Test Put",
        "password": "put123",
        "age": 30
      }];

    var url = '/api/logins';

    $httpBackend.whenGET(url).respond(logins);

    var editingRegex = new RegExp(url + '/[0-9][0-9]*', '');

        $httpBackend.whenGET(editingRegex).respond(function (method, url, data){

            var doc = {'id': 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0){
                for (var i = 0; i < logins.length; i++) {
                    if(logins[i].id == id){
                        doc = logins[i];
                        break;
                    }
                }
            }
            return [200, doc, {}];
        });

        $httpBackend.whenPOST(url).respond(function(method, url, data){
            var doc = angular.fromJson(data);

            if (!doc.id) {

                doc.id = logins[logins.length - 1].id + 1;
                logins.push(doc);
            }
            else{

                for (var i = 0; i < logins.length; i++) {
                    if(logins[i].id == doc.id){
                        logins[i] = doc;
                        break;
                    }
                }
            }
            return [200, doc, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();
  }


  var docs = [{
        "name": "Test Get",
        "password": "get123",
        "age": 32
      },{
        "name": "Test Put",
        "password": "put123",
        "age": 30
      }];

}());
