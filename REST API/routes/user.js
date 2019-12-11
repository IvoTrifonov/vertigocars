const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/:id', controllers.user.get);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put);

router.put('/deleteCar/:id', controllers.user.deleteCar);

module.exports = router;