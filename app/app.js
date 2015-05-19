'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
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
        $routeProvider.when('/TrainingDay/:id',
            {
                templateUrl:'js/templates/TrainingDay.html',
                controller: 'DayCtrl'
            });
        $routeProvider.when('/TrainingExercise/:id',
            {
                templateUrl:'js/templates/TrainingExercise.html',
                controller: 'ProgramCtrl'
            });

    });
