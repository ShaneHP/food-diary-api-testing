const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const entryRoutes = require('./routes/entryRoutes');

const app = express();

//local db connection
const dbURL = 'mongodb://localhost:27017/appdb';

mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000);
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/entry', entryRoutes);
