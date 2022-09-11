const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = newSchema({
    name: {type: String, required: true},
    mood: {type: String},
    genre: {type: String}
})

module.exports = mongoose.model('Song', songSchema);