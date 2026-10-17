


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
}


// Load the datejs library so we can format today's date */

require("datejs");

// Create a function that accepts any number of arrays
function combineUsers(...args) {

    // Create an object with an empty users array
    const combinedObject = {
        users: []
    };

    // Loop through every array passed into the function
    for (let i = 0; i < args.length; i++) {

        // Spread the existing users and the next array into one array
        combinedObject.users = [
            ...combinedObject.users,
            ...args[i]
        ];

    }

    // Get today's date in the required format
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // Return the object
    return combinedObject;
}
