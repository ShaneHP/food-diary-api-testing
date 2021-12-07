const hungry = require('./hungry');
const dailyNutrients = require('./dailyNutrients');
const trafficChart = require('./trafficChart');

module.exports = {
    paths: {
        '/analytics/hungry': {
            ...hungry,
        },
        '/analytics/dailyNutrients': {
            ...dailyNutrients,
        },
        '/analytics/trafficChart': {
            ...trafficChart,
        },
    },
};
