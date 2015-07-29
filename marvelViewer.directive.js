(function() {
  'use strict';

  /**
   * @name marvelViewerDir
   * @desc Marvel Viewer Directive
   * @param
   * @returns {Object}
   * @memberOf githubViewerApp
   */

  function marvelViewerDir() {
    /* implementation details */
    return {
      restrict: 'E',
      templateUrl: 'marvelViewer.template.html',
      controller: 'marvelViewerController',
      controllerAs: 'marvelViewerCtrl',
      scope: true,
      link: function(scope, element, attributes) {}
    };
  };

  angular.module('githubViewerApp').directive('marvelViewerDirective', marvelViewerDir);

}());