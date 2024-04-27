const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    work: String,
    deadline: Date
})

const TodoModel = mongoose.model('Todo', todoSchema)

module.exports = TodoModel