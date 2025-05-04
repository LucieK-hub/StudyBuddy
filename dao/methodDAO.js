const fs = require('fs');
const path = require('path');


//path to the methods data
// path.join ensures that the path line is correct; __dirname gives you the absolute path; .. go up one level (parent)
const methodsDataPath = path.join(__dirname, '../data/methods.json');


//function to read methods form the json file
const readMethodsFromData = () => {
    try {
        const data = fs.readFileSync(methodsDataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log('Error reading methods from data', error);
        return [];
    }
}


//constant to be used in other files
const getAllMethods = () => {
    return readMethodsFromData();
};


//allows function to be seen and used out of this file
module.exports = {getAllMethods};