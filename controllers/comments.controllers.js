const { text } = require('express');
const Comment = require('../models/Comment.model')

module.exports.commentsControllers = {
    postCommentsById: async(req, res) => {
        const {name, text} = req.body;
        await Comment.create({
            name: name,
            text: text,
            newsId: req.params.id
        })
        res.json('Коммент добавлен к новости по id:' + req.params)
    },

    deleteCommentsById: async(req, res) => {
        await Comment.findByIdAndRemove(req.params.id)
        res.json('Коммент удален по id:' + req.params)
    },

    getCommentsById: async(req, res) => {
       const allNews = await Comment.find(req.params.id)
       res.json(allNews)
    }

}