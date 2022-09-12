const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: {type: String, required: true},
    mood: {type: String},
    genre: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Song', songSchema);