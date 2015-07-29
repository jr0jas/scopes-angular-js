(function() {
  'use strict';

  /**
   * @name githubViewerController
   * @desc GitHub Viewer Controller
   * @param $scope, $anchorScroll, $location, githubViewerService
   * @returns {Object}
   * @memberOf githubViewerApp
   */

  function githubViewerController($scope, $anchorScroll, $location, githubViewerService) {
    var that = this;
    this.error = '';
    this.repositories = [];
    this.user = {};
    this.username = '';

    var onLoadRepos = function(data) {
      that.repositories = data;
      $location.hash('user-details');
      $anchorScroll();
    };

    var onError = function(reason) {
      that.error = 'Could not fetch the data.';
      that.user = {};
      that.repositories = [];
    };
    
    this.getGepositories = function(user) {
      githubViewerService.getRepositories(user.repos_url)
        .then(onLoadRepos, onError);
    }


    var onUserComplete = function(data) {
      that.user = data;
      that.getGepositories(that.user);
      that.error = '';
    };
    
    var onEventComplete = function(data) {
      that.event = data;
      that.error = '';
    };

    this.searchUser = function() {
      githubViewerService.getUser(that.username)
      .then(onUserComplete, onError);
    };

  }

  angular.module('githubViewerApp').controller('githubViewerController', [
      '$scope',
      '$anchorScroll',
      '$location',
      'githubViewerService',
      githubViewerController
    ]);

}());