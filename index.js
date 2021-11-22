const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const entryRoutes = require('./routes/entryRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const { requireAuth } = require('./middleware/authMiddleware');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

//local db connection
// const dbURL = 'mongodb://localhost:27017/appdb';

//hosted connection
const dbURL = `mongodb+srv://shanehp:${process.env.DB_PASSWORD}@food-diary-db.jjmve.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(PORT);
        console.log('connected to db on port ' + PORT);
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);
app.use('/entry', requireAuth, entryRoutes);
app.use('/analytics', requireAuth, analyticsRoutes);
