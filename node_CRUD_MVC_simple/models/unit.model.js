const mongoose = require('mongoose');
// var AutoIncrement = require('mongoose-sequence')(mongoose);
const UnitSchema = mongoose.Schema({
    // _id: {type: String, required: true},
    name : String
});

module.exports = mongoose.model('Unit', UnitSchema);