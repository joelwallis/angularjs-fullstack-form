angular.module('myApp').config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/form', {
        controller: 'FormCtrl',
        templateUrl: 'form.tpl.html'
      })
      .when('/overview', {
        controller: 'OverviewCtrl',
        templateUrl: 'overview.tpl.html'
      })
      .otherwise('/overview')
  }])
