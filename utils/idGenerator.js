//generates a random id using current time stamp and adding 5 random characters to it
function generateId() {
    const timeStamp = Date.now().toString(36) ;
    const random = Math.random().toString(36).substring(2, 5);
    return timeStamp + random;
}
//console.log(generateId());


//allows function to be seen and used out of this file
module.exports = generateId;