const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/register', controller.register);

module.exports = router;