const fs = require('fs');
const path = require('path');
const goalsFilePath = path.join(__dirname, '../data/goals.json');


//function to read goals from data
const getGoals = () => {
    try {
        const data = fs.readFileSync(goalsFilePath, 'utf-8'); //read the file as a string
        return JSON.parse(data); //parse the string into a javascript object
    } catch (error) {
        console.error("Error reading goals file", error);
        return []; //return an empty array if there is an error
    }
};


//function to write the updated goals back to data
const saveGoals = (goals) => {
    try {
        fs.writeFileSync(goalsFilePath, JSON.stringify(goals, null, 2)); // Write the array as a formatted JSON string
    } catch (error) {
        console.error("Error writing goals file", error);
    }

};


//function to add a new goal to data
const addGoal = (newGoal) => {
    const goals = getGoals();
    goals.push(newGoal); //push the new goal between the existing ones
    saveGoals(goals); //save the updated goals to data
};


//function to delete a specific goal chosen by id
const removeGoal = (id) => {
    const goals = getGoals();
    const filteredGoals = goals.filter(goal => goal.id !== id);
    if (goals.length === filteredGoals.length) {
        return false; //no goal deleted
    }
    saveGoals (filteredGoals);
    return true; //goal successfully deleted
};


// function that allows to find a goal by id
const findGoalIndex = (id, goals) => goals.findIndex(goal => goal.id === id);


//function that allows to update a goal
const updateGoal = (id, updatedData) => {
    const goals = getGoals();
    const index = findGoalIndex(id, goals);
    if (index === -1) return null;
    goals[index] = { ...goals[index], ...updatedData }; //merge the existing goal with the new data
    saveGoals(goals);
    return goals[index];
};


module.exports = {
    addGoal,
    removeGoal,
    getGoals,
    updateGoal
};