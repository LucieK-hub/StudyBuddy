const goalSchema = require("../schemas/goalSchema");


function validateGoal(data) {
    const errors = [];

    for (const field in goalSchema) {
        const rules = goalSchema[field];
        const value = data[field];
        //checks if any of the required data are missing
        if (rules.required && value === undefined || value === null || value === "") {
            errors.push(`${field} is required`);
        }
        //if there is a value check if it is the correct type
        if (value !== undefined && rules.type) {
            const type = rules.type.toLowerCase();
            const actualType = Array.isArray(value) ? 'array' : typeof value;
            //if the types do not match, push an error
            if (actualType !== type) {
                errors.push(`${field} should be of type ${rules.type}.`);
            }
        }
        //if there is a value and there are allowedValues push error
        if (value !== undefined && rules.allowedValues) {
            //if the value is different from the allowedValues push error
            if (!rules.allowedValues.includes(value)) {
                errors.push("${field} must be one of: ${rules.allowedValues.join(', ')}.");
            }
        }
    }
    return errors;
}


//shortened version of {validateGoal: validateGoal}
module.exports = { validateGoal };