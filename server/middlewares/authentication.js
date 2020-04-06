const { jwtVerify } = require('../helpers/jwt');
const authentication = (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) {
        res.status(401).json({msg: 'Not Authorized!'});
    } else {
        let decoded = jwtVerify(token);
        req.UserId = decoded.UserId;
        req.email = decoded.email;
        next();
    }
}

module.exports = authentication