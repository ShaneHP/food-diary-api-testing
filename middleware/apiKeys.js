require('dotenv').config();

const validateKey = (req, res, next) => {
    if (req.header('server-api-key') === process.env.API_KEY) {
        next();
        console.log('good request');
    } else {
        res.status(403).send({
            error: { code: 403, message: 'unauthorised access' },
        });
    }
};

module.exports = { validateKey };
