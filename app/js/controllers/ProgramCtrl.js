
myApp.controller('ProgramCtrl', function InitCtrl($scope) {
    $scope.program =
    {name: "Dag 1", exercises: [
        {id: "1", name: "Knebøy"},
        {id: "2", name: "Benkpress"},
        {id: "3", name: "Militærpress"}
    ]},
    {name: "Dag 2", exercises: [
        {id: "1", name: "Markløft"},
        {id: "2", name: "Pullups"},
        {id: "3", name: "Nedtrekk"}
    ]}

    $scope.saveProgram = function(event) {
        alert("Holy shit: " + event.name);
    }

    $scope.cancelEdit = function() {
        window.location = "/ProgramDetails.html";
    }
});