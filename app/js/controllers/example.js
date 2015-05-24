'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl($scope) {

  $scope.title = 'AngularJS, Gulp, and Browserify!';
  $scope.number = 1234;

}

controllersModule.controller('ExampleCtrl', ['$scope', ExampleCtrl]);
