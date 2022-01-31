const { Router } = require('express');

const router = Router();

// router.use(require('./news.route'));
// router.use(require('./categories.route'));
// router.use(require('./comments.route'));


router.use(require('../controllers/news.controllers'));
router.use(require('../controllers/categories.controllers'));
router.use(require('../controllers/comments.controllers'));



module.exports = router;