
const Category = require('../models/Category.model')

module.exports.categoryControllers = {
    postCategory: async(req, res) => {
        const {name} = req.body;
        await Category.create({
            name: name
        })
        res.json('Категория добавлена')
    },

    deleteCategoryById: async(req, res) => {
        await Category.findByIdAndRemove(req.params.id)
        res.json('категория удалена по id:' + req.params)
    },

    getAllCategory: async(req, res) => {
        await Category.find();
        res.json('категории выведены')
    }
}