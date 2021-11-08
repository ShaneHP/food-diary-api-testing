const jwt = require('jsonwebtoken');

require('dotenv').config();

const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // check jwt exists and is valid
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                //res.redirect('/login');
                res.status(500).send(err.message);
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        //res.redirect('/login');
        console.log('no jwt token');
        res.status(403).send('No JWT Token');
    }
};

module.exports = {
    requireAuth,
};
