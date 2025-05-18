const express = require('express');
const router = express.Router();
const { createGoal } = require('../controllers/goalController');
const { getAllGoals } = require('../controllers/goalController');
const { deleteGoal } = require('../controllers/goalController');
const { updateGoalController } = require('../controllers/goalController');
const validateGoal = require('../validators/goalValidator');


//POST route for creating a new goal
router.post("/goals", createGoal);
//GET route for fetching all goal
router.get("/goals", getAllGoals);
//delete route for a certain goal
router.delete("/goals/:id", deleteGoal);
//PUT route for updating an already existing goal
router.put('/:id', updateGoalController);


module.exports = router;