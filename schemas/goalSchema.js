//a schema for goals that gives them a structure
const goalSchema = {
    id: {
        type: String,
        required: false,
    },
    goalName: {
        type: String,
        required: true,
    },
    targetDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        allowedValues: ["Planned", "In Progress", "Completed"]

    },
    priority: {
        type: String,
        required: true,
        allowedValues: ["High", "Medium", "Low"]
    },
    progressCheckpoints: {
        type: Array,
        required: false,
    },
    methodsUsed: {
        type: Array,
        required: false,
    },
    timeSpent: {
        type: Number,
        required: false,
    },
};


//allows function to be seen and used out of this file
module.exports = goalSchema;