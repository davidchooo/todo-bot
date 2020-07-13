const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    userID: String
});

module.exports = mongoose.model('list', listSchema);
