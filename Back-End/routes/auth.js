const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/login',authController.postlogin);
router.post('/signup',authController.postsignup);

module.exports = router;