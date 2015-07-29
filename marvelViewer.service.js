(function() {
  'use strict';

  /**
   * @name marvelViewerService
   * @desc Marvel Viewer Service
   * @param $http
   * @returns {Object}
   * @memberOf githubViewerApp
   */
  function marvelViewerService ($http) {

    
    var getCharacters = function() {
      // Remember change your apikey by your account value
      return $http.get('http://gateway.marvel.com:80/v1/public/characters?apikey=00756345469ae591c18fb1e9e705f301')
        .then(function(response) {
          console.dir(response.data);
          return response.data.data.results;
        });
    };
    
    return {
      getCharacters: getCharacters
    };

  }

  angular.module('githubViewerApp').factory('marvelViewerService', ['$http', marvelViewerService]);

}());