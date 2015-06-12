'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngUnderscore',
    'ngStorage',
    'ngRoute',
    'myApp.version'
])
    .config(function($routeProvider) {
      $routeProvider.when('/ProgramDetails',
          {
            templateUrl:'app/js/templates/ProgramDetails.html',
            controller: 'ProgramCtrl'
          });
      $routeProvider.when('/NewProgram',
          {
            templateUrl:'app/js/templates/NewProgram.html',
            controller: 'ProgramCtrl'
          });
        $routeProvider.when('/TrainingDay/:dayId',
            {
                templateUrl:'app/js/templates/TrainingDay.html',
                controller: 'ProgramCtrl'
            });
        $routeProvider.when('/TrainingExercise/:dayId/:exerciseId',
            {
                templateUrl:'app/js/templates/TrainingExercise.html',
                controller: 'ProgramCtrl'
            });

    });
