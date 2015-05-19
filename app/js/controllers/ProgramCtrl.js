
myApp.controller('ProgramCtrl', function InitCtrl($scope, underscore, programService, $routeParams) {

    $scope.program = programService.program;
    if($routeParams.dayId) {
        $scope.day = underscore.find($scope.program.days, function (rw) {
            return rw.id == $routeParams.dayId
        });
        if ($routeParams.exerciseId) {
            $scope.exercise = underscore.find($scope.day.exercises, function (rw) {
                return rw.id == $routeParams.exerciseId
            });
        }
    }

    $scope.saveProgram = function(event) {
        alert("Holy shit: " + event.name);
    };

    $scope.cancelEdit = function() {
        window.location = "/ProgramDetails.html";
    };

    $scope.getDay = function(event) {
        alert("Holy shit: " + event.name);
    };

    $scope.startTrainingDay = function(day) {
        console.log("startTrainingDay: day id " + JSON.stringify(day.id));
        window.location = "#/TrainingDay/" + day.id;
    };

    $scope.startTrainingExercise = function(day, exercise) {
        console.log("startExercise: exercise id " + JSON.stringify(exercise.id));
        window.location = "#/TrainingExercise/" + day.id + "/" + exercise.id;
    };

}


);