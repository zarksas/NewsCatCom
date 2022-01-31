const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    name: String
})

const Category = mongoose.model('Category', newsSchema);

module.exports = Category;