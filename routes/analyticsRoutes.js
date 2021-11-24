const { Router } = require('express');
const analyticsController = require('../controllers/analyticsController');

const router = Router();

router.get('/hungry', analyticsController.getHungryChart);
router.get('/dailyNutrients', analyticsController.getNutrientChart);

module.exports = router;
