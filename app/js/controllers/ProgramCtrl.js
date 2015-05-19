
myApp.controller('ProgramCtrl', function InitCtrl($scope, programService) {

    $scope.program = programService.program;

    $scope.saveProgram = function(event) {
        alert("Holy shit: " + event.name);
    }

    $scope.cancelEdit = function() {
        window.location = "/ProgramDetails.html";
    }

    $scope.getDay = function(event) {
        alert("Holy shit: " + event.name);
    }

    $scope.startTrainingDay = function(day) {
        console.log("startTrainingDay: day id " + JSON.stringify(day.id));
        window.location = "#/TrainingDay/" + day.id;
    }

    $scope.startTrainingExercise = function(exercise) {
        $scope.chosenExercise = exercise;
        window.location = "#/TrainingExercise/" + exercise.id;
    }


});