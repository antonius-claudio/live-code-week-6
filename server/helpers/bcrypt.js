const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPass (password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

function comparePass (password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = {hashPass, comparePass}