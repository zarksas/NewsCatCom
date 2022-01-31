const { text } = require('express');
const News = require('../models/News.model')

module.exports.newsControllers = {
    postNews: async(req, res) => {
        const {header, text, category} = req.body;
        await News.create({
            header: header,
            text: text,
            category: category
        })
        res.json('Новость добавлена')
    },

    deleteNews: async(req, res) => {
        await News.findByIdAndRemove(req.params.id)
        res.json('новость удалена по id:' + req.params.id)
    },

    patchNews: async(req, res) => {
        const {header, text, category} = req.body;
        await News.findByIdAndUpdate({
            header : header,
            text: text,
            category: category
        })
       res.json('Новость изменена')
    },

    getNewsById: async(req, res) => {
        await News.findById(req.params.id)
        res.json('новость выведена по id:' + req.params.id)
    },

    getNews: async(req, res) => {
        await News.find();
        res.json('новости выведены')
    },

    getNewsCategoryById: async(req, res) => {
        await News.find({category: req.params.id})
    }

}