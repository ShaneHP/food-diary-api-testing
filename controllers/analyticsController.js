const Entry = require('../models/entry');

const getHungryChart = async (req, res) => {
    const userId = req.query.userId;
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const lastWeek = new Date(today);
        lastWeek.setDate(lastWeek.getDate() - 7);

        console.log('Today: ' + today);
        console.log('Last Week:' + lastWeek);

        const hungry = await Entry.countDocuments({
            userId,
            hungry: 'Yes',
            date: {
                $gte: lastWeek,
                $lte: today,
            },
        });
        const notHungry = await Entry.countDocuments({
            userId,
            hungry: 'No',
            date: {
                $gte: lastWeek,
                $lte: today,
            },
        });

        res.send({ hungry, notHungry });
    } catch (err) {
        console.log(err);
        res.status(404).send('Resource not found');
    }
};

const getNutrientChart = async (req, res) => {
    const userId = req.query.userId;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
        const totalNutrients = await Entry.aggregate([
            {
                $match: { userId, date: today },
            },
            {
                $group: {
                    _id: 'totalValues',
                    totalFat: {
                        $sum: '$foodItems.nutritionalValues.fat.weight',
                    },
                    totalSaturates: {
                        $sum: '$foodItems.nutritionalValues.saturates.weight',
                    },
                    totalSugar: {
                        $sum: '$foodItems.nutritionalValues.sugar.weight',
                    },
                    totalSalt: {
                        $sum: '$foodItems.nutritionalValues.salt.weight',
                    },
                },
            },
        ]);

        const dailyRecommended = {
            fat: 70,
            saturates: 20,
            sugar: 90,
            salt: 6,
        };

        res.send({ totalNutrients: totalNutrients[0], dailyRecommended });
    } catch (err) {
        console.log(err);
        res.status(404).send('Resource not found');
    }
};

const getTrafficChart = (req, res) => {
    res.send('/TODO');
};

module.exports = {
    getHungryChart,
    getNutrientChart,
    getTrafficChart,
};
