 const { Router } = require('express');
 const router = Router();
 const { commentsControllers } = require('../controllers/comments.controllers')

 router.post('/comments/news/:id', commentsControllers.postCommentsById);
 router.delete('/comments/:id', commentsControllers.deleteCommentsById);
 router.get('/comments/news/:id', commentsControllers.getCommentsById)




 module.exports = router;