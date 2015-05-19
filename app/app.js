'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngUnderscore',
    'ngRoute',
    'myApp.version'
])
    .config(function($routeProvider) {
      $routeProvider.when('/ProgramDetails',
          {
            templateUrl:'js/templates/ProgramDetails.html',
            controller: 'ProgramCtrl'
          });
      $routeProvider.when('/NewProgram',
          {
            templateUrl:'js/templates/NewProgram.html',
            controller: 'ProgramCtrl'
          });
        $routeProvider.when('/TrainingDay/:dayId',
            {
                templateUrl:'js/templates/TrainingDay.html',
                controller: 'ProgramCtrl'
            });
        $routeProvider.when('/TrainingExercise/:dayId/:exerciseId',
            {
                templateUrl:'js/templates/TrainingExercise.html',
                controller: 'ProgramCtrl'
            });

    });
