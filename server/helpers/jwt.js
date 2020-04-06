const jwt = require('jsonwebtoken');

const jwtSign = (obj) => {
    return jwt.sign(obj, process.env.secret);
}

const jwtVerify = (token) => {
    return jwt.verify(token, process.env.secret);
}

module.exports = { jwtSign, jwtVerify }