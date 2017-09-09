'use strict';
var app = angular.module('myApp',['AppRoutes','ngRoute'])
.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
  $routeProvider


    // Route: Home
    .when('/',{
      templateUrl: 'home.html'
    })

    // Route: CTP
    .when('/ctp',{
      templateUrl: 'ctp.html'
    })

    //Route: CTP
    .when('/mtp',{
      templateUrl: 'mtp.html'

    })

    // Route: CTP
    .when('/upload',{
      templateUrl: 'upload.html'
    })

    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);
    // Route: User Profile
