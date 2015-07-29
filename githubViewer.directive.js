(function() {
  'use strict';

  /**
   * @name githubViewerDir
   * @desc Github Viewer Directive
   * @param
   * @returns {Object}
   * @memberOf githubViewerApp
   */

  function githubViewerDir() {
    /* implementation details */
    return {
      restrict: 'E',
      templateUrl: 'githubViewer.template.html',
      controller: 'githubViewerController',
      controllerAs: 'githubViewerCtrl',
      scope: true,
      link: function(scope, element, attributes) {}
    };
  };

  angular.module('githubViewerApp').directive('githubViewerDirective', githubViewerDir);

}());