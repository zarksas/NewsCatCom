const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());


app.use(require('./routes/news.route'));
app.use(require('./routes/categories.route'));
app.use(require('./routes/comments.route'));


mongoose.connect("mongodb+srv://vaharho:85j86aaa@cluster0.bnqwk.mongodb.net/test", {
    
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))



app.listen(4000, () => {
    console.log('Server start')
})