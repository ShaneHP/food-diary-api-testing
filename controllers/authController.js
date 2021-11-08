const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// handle errors
const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    //incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    //incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // duplicate errors
    if (err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

const signupPost = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({
            email,
            password,
        });
        const token = createToken(user._id);
        res.send(token);
        res.status(201);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

const loginPost = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.send(token);
        res.status(200);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

const checkUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(500).send(err.message);
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                user.password = '';
                console.log(user);
                res.status(200).send(user);
            }
        });
    } else {
        res.status(403).send('unauthorised access');
    }
};

module.exports = {
    signupPost,
    loginPost,
    checkUser,
};
