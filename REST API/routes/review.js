const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/getAll', controllers.review.getAll);
router.get('/:id', controllers.review.getByUserId);
router.get('/getOne/:id', controllers.review.getOne)
router.post('/create', controllers.review.create);
router.put('/:id', controllers.review.update);
router.delete('/:id', controllers.review.delete);

module.exports = router;
