const { Router } = require('express');
const { newsControllers } = require('../controllers/news.controllers');
const router = Router();




 router.delete('/news/:id', newsControllers.deleteNews);
 router.patch('/news', newsControllers.patchNews);
 router.post('/news', newsControllers.postNews);
 router.get('/news/:id', newsControllers.getNewsById);
 router.get('/allNews', newsControllers.getNews);
 router.get('/news/categories/:id', newsControllers.getNewsCategoryById);



module.exports = router;