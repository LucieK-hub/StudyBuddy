const express = require('express');
const router = express.Router();
const { listMethods } = require('../controllers/methodController');


router.get("/methods", listMethods);


module.exports = router;