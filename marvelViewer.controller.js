(function() {
  'use strict';

  /**
   * @name marvelViewerController
   * @desc Marvel Viewer Controller
   * @param $scope, $anchorScroll, $location, marvelViewerService
   * @returns {Object}
   * @memberOf githubViewerApp
   */

  function marvelViewerController($scope, $anchorScroll, $location, marvelViewerService) {
    var that = this;
    this.error = '';
    this.characters = [];
    this.isEmpty = true;
    
    var onError = function(reason) {
      that.error = 'Could not fetch the data.';
      that.characters = [];
      that.isEmpty = true;
    };
    
    
    var onSchemeComplete = function(data) {
      that.characters = data;
      that.isEmpty = that.characters.length? false: true;
      that.error = '';
    };
    
    this.getCharacters = function() {
      marvelViewerService.getCharacters()
        .then(onSchemeComplete, onError);
    }
    
  } 
  
  angular.module('githubViewerApp').controller('marvelViewerController', [
      '$scope',
      '$anchorScroll',
      '$location',
      'marvelViewerService',
      marvelViewerController
    ]);

}());