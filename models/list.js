const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    description: String
});

mongoose.model('list', listSchema);
