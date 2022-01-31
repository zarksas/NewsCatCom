const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    name: String,
    text: String,
    nameId: String
})

const Comment = mongoose.model('Comment', newsSchema);

module.exports = Comment;