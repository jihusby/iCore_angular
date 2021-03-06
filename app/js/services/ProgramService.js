myApp.factory('programService', function ($http) {

    return {
        program :
        {
            name: '4-split mai og juni',
            goal: 'Å bli større og sterkere etc etc. Masse tekst her, som går over flere linjer.',
            start: '01.05.2015',
            end: '30.06.2015',
            days: [
                {id: '1', name: 'Dag 1', exercises: [
                    {id: '1', name: 'Knebøy', set: '5', reps: '5', secPause: 120, description: ""},
                    {id: '2', name: 'Benkpress', set: '5', reps: '5', secPause: 120},
                    {id: '3', name: 'Militærpress', set: '5', reps: '5', secPause: 120},
                    {id: '4', name: 'Bulgarske utfall', set: '3', reps: '6-8', secPause: 120},
                    {id: '5', name: 'Dips', set: '5', reps: '5', secPause: 120}
                ]},
                {id: '2', name: 'Dag 2', exercises: [
                    {id: '6', name: 'Markløft', set: '5', reps: '5', secPause: 120},
                    {id: '7', name: 'Pullups', set: '5', reps: '5', secPause: 10},
                    {id: '8', name: 'Fremoverbøyd roing', set: '5', reps: '5', secPause: 120},
                    {id: '9', name: 'Liggende beincurl', set: '3', reps: '5-8', secPause: 120},
                    {id: '10', name: 'Facepulls', set: '4', reps: '8', secPause: 120},
                    {id: '11', name: 'Pallof press', set: '3', reps: '6-8', secPause: 120}
                ]},
                {id: '3', name: 'Dag 3', exercises: [
                    {id: '12', name: 'Knebøy', set: '3', reps: '8', secPause: 120},
                    {id: '13', name: 'Beinpress', set: '3', reps: '10-12', secPause: 120},
                    {id: '14', name: 'Leg extension', set: '3', reps: '12-15', secPause: 120},
                    {id: '15', name: 'Skrå hantelpress', set: '3', reps: '8-10', secPause: 120},
                    {id: '16', name: 'Benkpress', set: '3', reps: '10', secPause: 120},
                    {id: '17', name: 'Skulderpress', set: '3', reps: '8-10', secPause: 120},
                    {id: '18', name: 'Sidehev', set: '3', reps: '10-12', secPause: 120},
                    {id: '19', name: 'Nedpress stang', set: '3', reps: '10-12', secPause: 120}
                ]},
                {id: '4', name: 'Dag 4', exercises: [
                    {id: '20', name: 'Rygghev', set: '3', reps: '8-12', secPause: 120},
                    {id: '21', name: 'Markløft', set: '3', reps: '8-12', secPause: 120},
                    {id: '22', name: 'Sittende beincurl', set: '3', reps: '12-15', secPause: 120},
                    {id: '23', name: 'Negative chins', set: '3', reps: '5', secPause: 120},
                    {id: '24', name: 'Nedtrekk', set: '2', reps: '8-10', secPause: 120},
                    {id: '25', name: 'Sittende roing', set: '3', reps: '8-10', secPause: 120},
                    {id: '26', name: 'Omvendt flyes hantler', set: '4', reps: '10-12', secPause: 120},
                    {id: '27', name: 'Biceps curl flat stang', set: '4', reps: '10-12', secPause: 120}
                ]}

            ]}
    };
});