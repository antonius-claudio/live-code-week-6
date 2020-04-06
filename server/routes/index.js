const router = require('express').Router();
const controller = require('../controllers/controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.post('/register', controller.register);

router.post('/login', controller.login);

router.post('/foods', authentication, controller.addFoods);

router.get('/foods', authentication, controller.getFoods);

router.delete('/foods/:id', authentication, authorization, controller.deleteFoods);

module.exports = router;