const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id: Number,
    complete: Boolean,
    description: String
});

mongoose.model('task', taskSchema);
