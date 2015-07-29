(function() {
  'use strict';

  /**
   * @name githubViewerService
   * @desc GitHub Viewer Service
   * @param $http
   * @returns {Object}
   * @memberOf githubViewerApp
   */
  var githubViewerService = function($http) {

    var getUser = function(username) {
      return $http.get('https://api.github.com/users/' + username)
        .then(function(response) {
          return response.data;
        });
    };
    
    var getRepositories = function(reposUrl) {
    return $http.get(reposUrl)
        .then(function(response) {
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepositories: getRepositories
    };

  }

  angular.module('githubViewerApp').factory('githubViewerService', ['$http', githubViewerService]);

}());