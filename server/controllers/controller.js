const { User } = require('../models');
class controller {
    static register (req, res, next) {
        let form = { email: req.body.email, password: req.body.password };
        res.status(201).json({form});
    }
}

module.exports = controller;