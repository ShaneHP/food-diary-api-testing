const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema(
    {
        userId: {
            type: String,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        },
        mood: {
            type: String,
        },
        activity: {
            type: String,
        },
        hungry: {
            type: String,
        },
        location: {
            type: String,
        },
        whoWith: {
            type: String,
        },
        mealType: {
            type: String,
        },
        foodItems: {
            name: {
                type: String,
            },
            weight: {
                type: String,
            },
            volume: {
                type: Number,
            },
            cookingMethod: {
                type: String,
            },
            foodGroup: {
                type: [String],
            },
        },
    },
    { timestamps: true }
);

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;
