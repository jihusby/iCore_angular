
myApp.controller('ProgramCtrl', function InitCtrl($scope, underscore, programService, $routeParams, $timeout, $localStorage) {

    $scope.program = programService.program;

    if($localStorage.dayResults == undefined){
        $localStorage.dayResults = [];
    }

    if($routeParams.dayId) {
        $scope.day = underscore.find($scope.program.days, function (rw) {
            return rw.id == $routeParams.dayId
        });

        $localStorage.currentDayResult = underscore.find($localStorage.dayResults, function (rw) {
            return rw.id == $localStorage.currentDayResult.id
        });
        if($localStorage.currentDayResult == undefined) {
            console.log("Create new DayResult and add to DayResults");
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) dd = '0' + dd
            if (mm < 10) mm = '0' + mm
            var today = dd + '.' + mm + '.' + yyyy;
            $localStorage.currentDayResult = {
                id: today,
                dayId: $scope.day.id,
                exercises: $scope.day.exercises
            };
            /* TODO:
            Get previous day's dayResult and get the weight/reps for each exercise. Save to this one maybe?
             */

            $scope.currentDayResult = $localStorage.currentDayResult;
        }else{
            console.log("DayResult exists, do not create");

        }
        $localStorage.dayResults.push($localStorage.currentDayResult);




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
