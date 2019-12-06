const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.post('/create', auth(), controllers.car.create);
router.post('/getCars', controllers.car.getCars);
router.get('/:id', controllers.car.getCar);

module.exports = router;