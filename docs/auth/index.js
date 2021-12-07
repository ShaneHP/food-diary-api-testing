const login = require('./login.js');
const signup = require('./signup.js');
const checkUser = require('./checkUser.js');

module.exports = {
    paths: {
        '/signup': {
            ...signup,
        },
        '/login': {
            ...login,
        },
        '/checkUser': {
            ...checkUser,
        },
    },
};
