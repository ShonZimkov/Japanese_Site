const mongoose = require('mongoose');
// var AutoIncrement = require('mongoose-sequence')(mongoose);
const WordSchema = mongoose.Schema({
    // _id: {type: String, required: true},
    japanese: String,
    translation: String,
    unit : { type: mongoose.Schema.Types.String, ref: 'Unit' }
});


module.exports = mongoose.model('Word', WordSchema);