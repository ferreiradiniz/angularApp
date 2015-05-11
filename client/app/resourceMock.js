(function(){
  'use strict';

  module.exports = function(nameModule, jsonArray){


  var myModule = nameModule + '.resourceMock';

  var app = angular.module(myModule, ['ngMockE2E']);

  app.run(runBlock);

  runBlock.$inject = ['$httpBackend'];

  function runBlock($httpBackend){

    var nameModule = jsonArray;

    var url = '/nameModule';

    $httpBackend.whenGET(url).respond(nameModule);

    var editingRegex = new RegExp(url + '/[0-9][0-9]*', '');

        $httpBackend.whenGET(editingRegex).respond(function (method, url, data){

            var doc = {'id': 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0){
                for (var i = 0; i < nameModule.length; i++) {
                    if(nameModule[i].id == id){
                        doc = nameModule[i];
                        break;
                    }
                }
            }
            return [200, doc, {}];
        });

        $httpBackend.whenPOST(url).respond(function(method, url, data){
            var doc = angular.fromJson(data);

            if (!doc.id) {

                doc.id = nameModule[nameModule.length - 1].id + 1;
                nameModule.push(doc);
            }
            else{

                for (var i = 0; i < nameModule.length; i++) {
                    if(nameModule[i].id == doc.id){
                        nameModule[i] = doc;
                        break;
                    }
                }
            }
            return [200, doc, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();

  }

  return app;

};

}());
