//connects to methodDAO in file dao
const methodDAO = require('../dao/methodDAO');


//getting all methods using dao to get to data
const listMethods = (req, res) => {
    try {
        const methods = methodDAO.getAllMethods();
        res.status(200).json(methods);
    } catch (error) {
        console.log("Error fetching methods")
        res.status(500).json({message: "Error fetching methods"});
    }
};


//allows function to be seen and used out of this file
module.exports = {listMethods};