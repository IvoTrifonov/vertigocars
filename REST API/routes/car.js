const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.post('/create', auth(), controllers.car.create);
router.post('/getCars', controllers.car.getCars);
router.get('/:id', controllers.car.getCar);
router.put('/:id', controllers.car.updateCar);
// router.put('/updateLikes/:id', controllers.car.updateCarLikes);
router.get('/getCarsByUserId/:id', controllers.car.getCarsByUserId);
router.get('/getSavedCars/:ids', controllers.car.getSavedCars);
router.delete('/:id', controllers.car.delete);

module.exports = router;