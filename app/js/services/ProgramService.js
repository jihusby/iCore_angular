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
                    {id: '1', name: 'Knebøy', set: '5', reps: '5'},
                    {id: '2', name: 'Benkpress', set: '5', reps: '5'},
                    {id: '3', name: 'Militærpress', set: '5', reps: '5'},
                    {id: '4', name: 'Bulgarske utfall', set: '3', reps: '6-8'},
                    {id: '5', name: 'Dips', set: '5', reps: '5'}
                ]},
                {id: '2', name: 'Dag 2', exercises: [
                    {id: '1', name: 'Markløft', set: '5', reps: '5'},
                    {id: '2', name: 'Pullups', set: '5', reps: '5'},
                    {id: '3', name: 'Fremoverbøyd roing', set: '5', reps: '5'},
                    {id: '4', name: 'Liggende beincurl', set: '3', reps: '5-8'},
                    {id: '5', name: 'Facepulls', set: '4', reps: '8'},
                    {id: '6', name: 'Pallof press', set: '3', reps: '6-8'}
                ]},
                {id: '3', name: 'Dag 3', exercises: [
                    {id: '1', name: 'Knebøy', set: '3', reps: '8'},
                    {id: '2', name: 'Beinpress', set: '3', reps: '10-12'},
                    {id: '3', name: 'Leg extension', set: '3', reps: '12-15'},
                    {id: '4', name: 'Skrå hantelpress', set: '3', reps: '8-10'},
                    {id: '5', name: 'Benkpress', set: '3', reps: '10'},
                    {id: '6', name: 'Skulderpress', set: '3', reps: '8-10'},
                    {id: '7', name: 'Sidehev', set: '3', reps: '10-12'},
                    {id: '8', name: 'Nedpress stang', set: '3', reps: '10-12'}
                ]},
                {id: '4', name: 'Dag 4', exercises: [
                    {id: '1', name: 'Rygghev', set: '3', reps: '8-12'},
                    {id: '2', name: 'Markløft', set: '3', reps: '8-12'},
                    {id: '3', name: 'Sittende beincurl', set: '3', reps: '12-15'},
                    {id: '4', name: 'Negative chins', set: '3', reps: '5'},
                    {id: '5', name: 'Nedtrekk', set: '2', reps: '8-10'},
                    {id: '6', name: 'Sittende roing', set: '3', reps: '8-10'},
                    {id: '7', name: 'Omvendt flyes hantler', set: '4', reps: '10-12'},
                    {id: '8', name: 'Biceps curl flat stang', set: '4', reps: '10-12'}
                ]}

            ]}
    };
});