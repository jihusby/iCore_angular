var express = require('express'),
    mongoose = require('mongoose');

var bodyParser = require("body-parser");

var Program = require('./models/programModel');
var Day = require('./models/dayModel');
var Exercise = require('./models/exerciseModel');
var Set = require('./models/setModel');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT || 3000;

var programData = {
    programs: [],
    days: [],
    exercises: [],
    sets: []
};

prepareTestData();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-type: application/json');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Authorize");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
    next();
});

var partnerRouter = express.Router();

partnerRouter.route('/search')
    .get(function(req,res){
        console.log("Getting data...");

        Program.find(function(err,data){
            if(err){
                console.log("Error: " + err);
            }else{
                programData.programs = data;
            }
        });
        Day.find(function(err,data){
            if(err){
                console.log("Error: " + err);
            }else{
                programData.days = data;
            }
        });
        Exercise.find(function(err,data){
            if(err){
                console.log("Error: " + err);
            }else{
                programData.exercises = data;
            }
        });
        Set.find(function(err,data){
            if(err){
                console.log("Error: " + err);
            }else{
                programData.sets = data;
            }
        });
        res.json(programData);
    });

partnerRouter.route('/programDetail')
    .get(function(req,res){
        var id = req.query.id;

        var program = Program.collection.find({id: id}).toArray(function(err,result){
            if (err) {
                console.log("Error! " + err);
                res.send(err);
            } else if (result.length) {
                console.log("Result: " + result);
                var program = result[0];
                res.json(program);

            } else {
                console.log("Error! " + err);
                res.send(err);
            }
        });
    });

partnerRouter.route('/partnerSave')
    .post(function(req,res) {
        var updated = req.body.data;
        if(updated.id) {
            var partner = Partner.find({id: updated.id}, function (err, partner) {
                partner[0].name = updated.name;
                partner[0].address = updated.address;
                partner[0].zipCode = updated.zipCode;
                partner[0].city = updated.city;
                partner[0].email = updated.email;
                partner[0].phone = updated.phone;
                partner[0].webSite = updated.webSite;
                partner[0].partnerType = updated.partnerType;
                partner[0].save(function (err, partner) {
                    if (err) {
                        return console.error(err);
                    } else {
                        res.json(partner);
                    }
                });
            });
        }else{

            var partner = new Partner({
                id: "0",
                name: updated.name,
                address: updated.address,
                zipCode: updated.zipCode,
                city: updated.city,
                email: updated.email,
                phone: updated.phone,
                webSite: updated.webSite,
                partnerType: updated.partnerType
            });
            partner.save(function(err, partner) {
                if (err) {
                    return console.error(err);
                } else {
                    res.json(partner);
                }
            });
        }

    });

partnerRouter.route('/persons/active')
    .get(function(req,res){
        console.log("Sending true");

        /* TODO: Implement the check active functionality
         */
        var activeData = {
            active: true
        };
        res.json(activeData);
    });

partnerRouter.route('/login')
    .post(function(req,res){

        var email = req.body.Email;
        var password = req.body.Password;

        Person.collection.find({email: email, password: password}).toArray(function (err, result) {
            if (err) {
                console.log(err);
                res(err);
            } else if (result.length) {

                var person = result[0];
                credentials = {
                    token: person.token,
                    userId: person.id,
                    name: person.firstName + " " + person.lastName
                };
                res.json(credentials);

            } else {
                res.send("Error");
            }
        });
    });

app.use('/api', partnerRouter);


app.get('/', function(req, res) {
    console.log("Blank");
    res.send('Welcome to the API');
});

app.listen(port, function() {
    console.log("Express server listening on port " + port);
});

function prepareTestData() {

    console.log("Preparing test data 1");
    //removeTestData();

    var program = new Program({
        id: '1',
        name: '4-split'
    });
    console.log("Preparing test data 2");
    program.save(function(err, program) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Saved : " + program);
        }
    });
    console.log("Preparing test data 3");

    Program.find(function(err,data){
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("data is " + data);
        }
    });

    console.log("Preparing test data 4");

    insertDay("1", program.id, "Dag 1");
    insertDay("2", program.id, "Dag 2");
    insertDay("3", program.id, "Dag 3");
    insertDay("4", program.id, "Dag 4");

    console.log("Preparing test data done");
}

function removeTestData() {
    Program.remove({}, function(err) {
    });
    Day.remove({}, function(err) {
    });
    Exercise.remove({}, function(err) {
    });
    Set.remove({}, function(err) {
    });
}

function insertDay(id, programId, name) {
    var day = new Day({
        id: id,
        programId: programId,
        name: name
    });
    day.save(function(err, day) {
        if(err) console.error(err);
    });

    insertExercise("1", day.id, "Knebøy", 5, 5, 120);
    insertExercise("2", day.id, "Benkpress", 5, 5, 120);
    insertExercise("3", day.id, "Militærpress", 5, 5, 120);
    insertExercise("4", day.id, "Bulgarske utfall", 3, 8, 90);
    insertExercise("4", day.id, "Dips", 5, 5, 120);
}

function insertExercise(id, dayId, name, numSet, numReps, secPause) {

    var exercise = new Exercise({
        id: "1",
        dayId: dayId,
        name: name,
        numSet: numSet,
        numReps: numReps,
        secPause: secPause
    });

    exercise.save(function(err, person) {
        if(err) console.error(err);
    });
    console.log('Dev: exercise added');
}


