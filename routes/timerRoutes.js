
const express = require('express');
const router = express.Router();
const { startTimer, stopTimer } = require('../controllers/timerController');

router.post('/goals/:goalId/start', startTimer);
router.post('/goals/:goalId/stop', stopTimer);

module.exports = router;
