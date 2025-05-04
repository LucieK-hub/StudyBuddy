//a schema for methods that gives them a structure
const methodSchema = {
    id: {
        type: String,
        required: false,
    },
    methodName: {
        type: String,
        required: true,
    },
    methodDescription: {
        type: String,
        required: true,
    },
    timerIntegration: {
        type: Boolean,
        required: true, //needs to be true, so that we can work with it being true/false
    },
    recommendedDuration: {
        type: String,
        required: false,
    },
    goalsConnected: {
        type: Array,
        required: false,
    },
};


//allows function to be seen and used out of this file
module.exports = methodSchema;