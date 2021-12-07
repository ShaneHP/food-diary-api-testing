module.exports = {
    components: {
        schemas: {
            userId: {
                type: 'string',
                description: 'ID of user who created the entry',
                example: '6186c613f5cab18c930f3501',
            },
            authorization: {
                type: 'string',
                description:
                    'JWT token which gives users access to this endpoint',
                example:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZjNjEzZjVjYWIxOGM5MzBmMzUwMSIsImlhdCI6MTYzNjcyNzc0MH0.dcKyNaTS_fDbaORSzQdVx-Xf65gRUmtJStg7bZMGHls',
            },
            id: {
                type: 'string',
                description: 'Diary entry ID',
                example: '619e56565c3dcc177a0425c9',
            },
            token: {
                type: 'string',
                description: 'JWT token which authorizes a user',
                example:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZjNjEzZjVjYWIxOGM5MzBmMzUwMSIsImlhdCI6MTYzNjcyNzc0MH0.dcKyNaTS_fDbaORSzQdVx-Xf65gRUmtJStg7bZMGHls',
            },
            auth: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: 'User email address',
                        example: 'john.doe@gmail.com',
                    },
                    password: {
                        type: 'string',
                        description: 'User password',
                        example: 'password456',
                    },
                },
            },
            user: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'User ID',
                        example: '6186c613f4cabe8c330f3501',
                    },
                    email: {
                        type: 'string',
                        description: 'User email address',
                        example: 'john.doe@gmail.com',
                    },
                },
            },
            hungryData: {
                type: 'object',
                properties: {
                    hungry: {
                        type: 'number',
                        description:
                            'Number of food items a user ate when they were hungry in the past week',
                        example: 20,
                    },
                    notHungry: {
                        type: 'number',
                        description:
                            'Number of food items a user ate when they were not hungry in the past week',
                        example: 5,
                    },
                },
            },
            nutrient: {
                type: 'string',
                description: 'A food nutrient',
                example: 'fat',
            },
            trafficChart: {
                type: 'object',
                properties: {
                    green: {
                        type: 'number',
                        description:
                            'The number of food items a user ate with a green value for a specified nutrient',
                        example: 3,
                    },
                    amber: {
                        type: 'number',
                        description:
                            'The number of food items a user ate with an amber value for a specified nutrient',
                        example: 2,
                    },
                    red: {
                        type: 'number',
                        description:
                            'The number of food items a user ate with a red value for a specified nutrient',
                        example: 1,
                    },
                },
            },
            dailyNutrientData: {
                type: 'object',
                properties: {
                    totalNutrients: {
                        type: 'object',
                        properties: {
                            fat: {
                                type: 'number',
                                description:
                                    'Weight in grams of fat eaten by a user today',
                                example: 65,
                            },
                            saturates: {
                                type: 'number',
                                description:
                                    'Weight in grams of saturates eaten by a user today',
                                example: 23,
                            },
                            sugar: {
                                type: 'number',
                                description:
                                    'Weight in grams of sugar eaten by a user today',
                                example: 76,
                            },
                            salt: {
                                type: 'number',
                                description:
                                    'Weight in grams of salt eaten by a user today',
                                example: 7,
                            },
                        },
                    },
                    dailyRecommended: {
                        type: 'object',
                        properties: {
                            fat: {
                                type: 'number',
                                description:
                                    'Weight in grams of daily recommended fat intake',
                                example: 70,
                            },
                            saturates: {
                                type: 'number',
                                description:
                                    'Weight in grams of daily recommended saturates intake',
                                example: 20,
                            },
                            sugar: {
                                type: 'number',
                                description:
                                    'Weight in grams of daily recommended sugar intake',
                                example: 90,
                            },
                            salt: {
                                type: 'number',
                                description:
                                    'Weight in grams of daily recommended salt intake',
                                example: 6,
                            },
                        },
                    },
                },
            },
            entry: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'Diary entry ID',
                        example: '619e56565c3dcc177a0425c9',
                    },
                    userId: {
                        type: 'string',
                        description: 'ID of user who created the entry',
                        example: '6186c613f5cab18c930f3501',
                    },
                    date: {
                        type: 'date',
                        description: 'Date the user ate the food item',
                        example: '2021-11-24T00:00:00.000+00:00',
                    },
                    time: {
                        type: 'string',
                        description: 'Time the user ate the food item',
                        example: '15:11',
                    },
                    mood: {
                        type: 'string',
                        description:
                            'How the user felt about their food choice',
                        example: 'Good',
                    },
                    activity: {
                        type: 'string',
                        description: 'What the user was doing while eating',
                        example: 'Watching TV',
                    },
                    hungry: {
                        type: 'string',
                        description: 'Was the user hungry when they ate',
                        example: 'Yes',
                    },
                    location: {
                        type: 'string',
                        description: 'Where was the user when they ate',
                        example: 'Home',
                    },
                    whoWith: {
                        type: 'string',
                        description: 'Who was the user with when they ate',
                        example: 'Myself',
                    },
                    mealType: {
                        type: 'string',
                        description: 'Which meal was it',
                        example: 'Lunch',
                    },
                    physicalFeeling: {
                        type: 'string',
                        description:
                            'How did the user feel physcially after eating',
                        example: 'Well',
                    },
                    foodItems: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                description: 'Name of the food the user ate',
                                example: 'Pizza',
                            },
                            weight: {
                                type: 'number',
                                description:
                                    'Weight in grams of the food the user ate',
                                example: 120,
                            },
                            nutritionalValues: {
                                type: 'object',
                                properties: {
                                    fat: {
                                        type: 'object',
                                        properties: {
                                            weight: {
                                                type: 'number',
                                                description:
                                                    'Fat content of food in grams',
                                                example: 15,
                                            },
                                            trafficLight: {
                                                type: 'object',
                                                properties: {
                                                    value: {
                                                        type: 'string',
                                                        description:
                                                            'Colour of the nutrient on the traffic light scale',
                                                        example: 'Amber',
                                                    },
                                                    color: {
                                                        type: 'string',
                                                        description:
                                                            'Hex code of traffic value colour',
                                                        example: '#FF7E06',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    saturates: {
                                        type: 'object',
                                        properties: {
                                            weight: {
                                                type: 'number',
                                                description:
                                                    'Saturates content of food in grams',
                                                example: 4.5,
                                            },
                                            trafficLight: {
                                                type: 'object',
                                                properties: {
                                                    value: {
                                                        type: 'string',
                                                        description:
                                                            'Colour of the nutrient on the traffic light scale',
                                                        example: 'Amber',
                                                    },
                                                    color: {
                                                        type: 'string',
                                                        description:
                                                            'Hex code of traffic value colour',
                                                        example: '#FF7E06',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    sugar: {
                                        type: 'object',
                                        properties: {
                                            weight: {
                                                type: 'number',
                                                description:
                                                    'Sugar content of food in grams',
                                                example: 6,
                                            },
                                            trafficLight: {
                                                type: 'object',
                                                properties: {
                                                    value: {
                                                        type: 'string',
                                                        description:
                                                            'Colour of the nutrient on the traffic light scale',
                                                        example: 'Amber',
                                                    },
                                                    color: {
                                                        type: 'string',
                                                        description:
                                                            'Hex code of traffic value colour',
                                                        example: '#FF7E06',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    salt: {
                                        type: 'object',
                                        properties: {
                                            weight: {
                                                type: 'number',
                                                description:
                                                    'Salt content of food in grams',
                                                example: 2,
                                            },
                                            trafficLight: {
                                                type: 'object',
                                                properties: {
                                                    value: {
                                                        type: 'string',
                                                        description:
                                                            'Colour of the nutrient on the traffic light scale',
                                                        example: 'Red',
                                                    },
                                                    color: {
                                                        type: 'string',
                                                        description:
                                                            'Hex code of traffic value colour',
                                                        example: '#E61E10',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
