'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function DealCtrl($scope, $q, policyService) {

  $q.all([policyService.get(10), policyService.get(20)])
  .then(function (policies) {
    $scope.current = policies[0];
    $scope.deal = policies[1];
  });
}

controllersModule.controller('DealCtrl', ['$scope', '$q', 'PolicyService', DealCtrl]);
