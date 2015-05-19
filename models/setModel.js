var mongoose = require('mongoose');
Schema = mongoose.Schema;

var setModel = new Schema({
        id: {type: String},
        dayId: {type: String},
        exerciseId: {type: String},
        reps: {type: Number},
        comment: {type: String}
});

module.exports = mongoose.model('Set', setModel);
