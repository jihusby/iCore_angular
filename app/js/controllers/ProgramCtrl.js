
myApp.controller('ProgramCtrl', function InitCtrl($scope, underscore, programService, $routeParams, $timeout) {

    $scope.program = programService.program;
    if($routeParams.dayId) {
        $scope.day = underscore.find($scope.program.days, function (rw) {
            return rw.id == $routeParams.dayId
        });
        if ($routeParams.exerciseId) {
            $scope.exercise = underscore.find($scope.day.exercises, function (rw) {
                return rw.id == $routeParams.exerciseId
            });

            var range = [];
            for(var i=0;i<$scope.exercise.set;i++) {
                range.push(i);
            }
            $scope.sets = range;
            $scope.pause = "Start pause";
        }
    }

    $scope.countController = function() {
        if($scope.pause == ""){
            $scope.pause = "Start pause";
            $scope.counter = "";
            $scope.startSet = "";
        }else{
            $scope.pause = "";
            $scope.counter = $scope.exercise.secPause;
            $scope.onTimeout = function () {
                if ($scope.counter > 0) {
                    $scope.counter--;
                    mytimeout = $timeout($scope.onTimeout, 1000);
                }else{
                    $scope.pause = "Start nytt sett";
                    $scope.counter = "";
                    $scope.startSet = "startSet";
                }
            }
            var mytimeout = $timeout($scope.onTimeout, 1000);
        }

    };

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