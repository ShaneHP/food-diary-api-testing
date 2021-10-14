const mongoose = require('mongoose');
const express = require('express');
const Entry = require('./models/entry');

const app = express();

//local db connection
const dbURL = 'mongodb://localhost:27017/appdb';

mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db');
        addEntry();
    })
    .catch((err) => {
        console.log(err);
    });

const addEntry = () => {
    const entry = new Entry({
        date: new Date(),
        time: '19:04',
        mood: 'Happy',
        activity: 'Talking with family',
        hungry: true,
        location: 'Dinner table',
        whoWith: 'family',
        mealType: 'Dinner',
        foodItems: {
            name: 'Double Cheeseburger',
            weight: 300,
            cookingMethod: 'Fried',
            foodGroup: ['Carbohydrates', 'Proteins', 'Fats'],
        },
    });

    entry
        .save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
};
