const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    header: String,
    text: String,
    category: String
})

const News = mongoose.model('News', newsSchema);

module.exports = News;


