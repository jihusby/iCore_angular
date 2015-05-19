myApp.factory('dayService', function () {

    return {

        getDay: function(id) {
            console.log("getDay invoked with id " + id);
            var date = new Date();
            date = date.toLocaleDateString("no") + " " + date.toLocaleTimeString("no");
            return {
                    id: '1', name: 'Ny dag 1', date: date, exercises: [
                        {id: '1', name: 'Knebøy', set: '5', reps: '5'},
                        {id: '2', name: 'Benkpress', set: '5', reps: '5'},
                        {id: '3', name: 'Militærpress', set: '5', reps: '5'},
                        {id: '4', name: 'Bulgarske utfall', set: '3', reps: '6-8'},
                        {id: '5', name: 'Dips', set: '5', reps: '5'}
                    ]
            };
        }
    };

});