'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Deal', {
    url: '/deal',
    controller: 'DealCtrl as deal',
    templateUrl: 'deal.html'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
