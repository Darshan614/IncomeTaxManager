const express = require('express');
const taxController = require('../controllers/tax');

const router = express.Router();

router.post('/taxableincome',taxController.posttaxableincome);

module.exports = router;