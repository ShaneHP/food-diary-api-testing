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

module.exports = {
    getHungryChart,
};
