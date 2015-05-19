var mongoose = require('mongoose');
Schema = mongoose.Schema;

var programModel = new Schema({
        _id: {type: String},
        name: {type: String},
        description: {type: String,
        days: [{
                _id: {type: String},
                name: {type: String},
                exercises: [{
                        _id: {type: String},
                        name: {type: String},
                        numSet: {type: Number},
                        numReps: {type: Number},
                        secPause: {type: Number},
                        sets: [{
                                _id: {type: String},
                                reps: {type: Number},
                                comment: {type: String}
                        }]

                }]
        }]
        }

});

module.exports = mongoose.model('Program', programModel);

