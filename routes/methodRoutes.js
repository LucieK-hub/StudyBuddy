const express = require('express');
const router = express.Router();
const methodController = require('../controllers/methodController');


router.get("/methods", methodController.listMethods);


module.exports = router;