const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema(
    {
        userId: {
            type: String,
        },
        date: {
            type: Date,
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
        physicalFeeling: {
            type: String,
        },
        foodItems: {
            name: {
                type: String,
            },
            weight: {
                type: Number,
            },
            volume: {
                type: Number,
            },
            cookingMethod: {
                type: String,
            },
            nutritionalValues: {
                fat: {
                    weight: {
                        type: Number,
                    },
                    trafficLight: {
                        value: {
                            type: String,
                        },
                        color: {
                            type: String,
                        },
                    },
                },
                saturates: {
                    weight: {
                        type: Number,
                    },
                    trafficLight: {
                        value: {
                            type: String,
                        },
                        color: {
                            type: String,
                        },
                    },
                },
                sugar: {
                    weight: {
                        type: Number,
                    },
                    trafficLight: {
                        value: {
                            type: String,
                        },
                        color: {
                            type: String,
                        },
                    },
                },
                salt: {
                    weight: {
                        type: Number,
                    },
                    trafficLight: {
                        value: {
                            type: String,
                        },
                        color: {
                            type: String,
                        },
                    },
                },
            },
        },
    },
    { timestamps: true }
);

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;
