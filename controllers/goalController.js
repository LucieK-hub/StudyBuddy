const { validateGoal} = require("../validators/goalValidator");
const generateId = require("../utils/idGenerator");
const { addGoal } = require("../dao/goalDAO");
const { removeGoal } = require("../dao/goalDAO");
const { updateGoal } = require("../dao/goalDAO");
const { getAllMethods } = require('../dao/methodDAO');
const { getGoals } = require("../dao/goalDAO");




const createGoal = (req, res) => {
    const newGoal = {
        id: generateId(),
        goalName: req.body.goalName,
        targetDate: req.body.targetDate,
        status: req.body.status,
        priority: req.body.priority,
        progressCheckpoints: req.body.progressCheckpoints || [],
        methodsUsed: req.body.methodsUsed || [],
        timeSpent: req.body.timeSpent || 0,
    }
    const availableMethods = getAllMethods();
    const methodExists = newGoal.methodsUsed.every(methodId => availableMethods.some(method => method.id === methodId));
    if (!methodExists) {
        return res.status(400).json({error: 'Invalid methodId'});
    }
    const errors = validateGoal(newGoal);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    //if no error occur add the new goal to data
    addGoal(newGoal);
    //send a response showing success
    res.status(201).json(newGoal); //201 means created
}


const deleteGoal = (req, res) => {
    const { id } = req.params;
    const deleted = removeGoal(id);
    if (!deleted) {
        return res.status(404).json({error: "Goal not found"});
    }
    return res.status(200).json({message: "Goal deleted successfully"});
}


const updateGoalController = (req, res) => {
    const { id } = req.params;
    const updatedGoal = updateGoal(id, req.body);
    const errors = validateGoal(updatedGoal);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    if (!updatedGoal) {
        return res.status(404).json({ error: 'Goal not found' });
    }
    res.status(200).json(updatedGoal);
};


const getAllGoals = (req, res) => {
    const goals = getGoals(); // from goalDAO
    const methods = getAllMethods(); // from methodDAO
    const enrichedGoals = goals.map(goal => ({
        ...goal,
        methods: goal.methodsUsed.map(methodId =>
            methods.find(method => method.id === methodId)
        )
    }));
    res.status(200).json(enrichedGoals);
};



module.exports = {
    createGoal,
    deleteGoal,
    updateGoalController,
    getAllGoals,
};