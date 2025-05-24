const { getGoals, saveGoals } = require('../dao/goalDAO');


let activeTimers = {};


function startTimer(req, res) {
    const { goalId } = req.params;
    const goals = getGoals();
    const goal = goals.find(g => g.id === goalId);
    if (!goal) {
        return res.status(404).json({ error: 'Goal not found' });
    }
    if (activeTimers[goalId]) {
        return res.status(400).json({ error: 'Timer already running for this goal' });
    }
    activeTimers[goalId] = Date.now(); // store start time
    res.status(200).json({ message: 'Timer started' });
};


function stopTimer(req, res) {
    const { goalId } = req.params;
    const goals = getGoals();
    const goal = goals.find(g => g.id === goalId);
    const startTime = activeTimers[goalId];
    if (!goal) {
        return res.status(404).json({ error: 'Goal not found' });
    }
    if (!startTime) {
        return res.status(400).json({ error: 'No active timer for this goal' });
    }
    const duration = Math.floor((Date.now() - startTime) / 1000); // in seconds
    goal.timeSpent += duration;
    saveGoals(goals); // persist updated time
    delete activeTimers[goalId];
    res.status(200).json({ message: `Timer stopped. Added ${duration} seconds`, timeSpent: goal.timeSpent });
};


module.exports = {
    startTimer,
    stopTimer
};