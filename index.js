const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const API = require('./middleware/apiKeys');
const entryRoutes = require('./routes/entryRoutes');
require('dotenv').config();

const app = express();

//local db connection
// const dbURL = 'mongodb://localhost:27017/appdb';

//hosted connection
const dbURL = `mongodb+srv://shanehp:${process.env.DB_PASSWORD}@food-diary-db.jjmve.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000);
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/entry', API.validateKey, entryRoutes);
