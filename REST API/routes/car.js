const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

// router.get('/', controllers.car.get);

router.post('/create', auth(), controllers.car.create);
router.post('/getCars', controllers.car.getCars);

module.exports = router;