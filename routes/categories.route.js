 const { Router } = require('express');
 const router = Router();
 const { categoryControllers } = require('../controllers/categories.controllers')


 router.post('/categories', categoryControllers.postCategory);
 router.delete('/categories/:id', categoryControllers.deleteCategoryById);
 router.get('/categories', categoryControllers.getAllCategory);




 module.exports = router;