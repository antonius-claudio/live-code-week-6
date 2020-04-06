const {Food} = require('../models');
const authorization = (req, res, next) => {
    Food.findByPk(req.params.id)
    .then((result) => {
        if (result.UserId === req.UserId) {
            next()
        } else {
            res.status(401).json({msg: 'Not Authorized'})
        }
    })
    .catch((err) => {
        res.status(404).json({msg: 'Id food tidak ada'})
    });
}

module.exports = authorization