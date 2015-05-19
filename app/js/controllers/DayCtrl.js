
myApp.controller('DayCtrl', function InitCtrl($scope, dayService) {

    console.log("DayCtrl id is " + $scope.id);
    $scope.day = dayService.getDay($scope.id);

    $scope.startTrainingDay = function(day) {
        console.log("--> day controller: " + day.name);
        $scope.day = day;

        window.location = "#/TrainingDay/" + day.id;
    }

    $scope.startTrainingExercise = function(exercise) {
        $scope.chosenExercise = exercise;
        window.location = "#/TrainingExercise/" + exercise.id;
    }


});