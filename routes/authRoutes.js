const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.post('/signup', authController.signupPost);
router.post('/login', authController.loginPost);
router.get('/checkUser', requireAuth, authController.checkUser);

module.exports = router;
