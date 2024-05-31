var prompt = require('prompt-sync')();
const debug = require('./../utils/debug.utils.js');


const getUserInput = () => {
    return new Promise((resolve, reject) => {
        // TODO: delete this  for ship
        
        try {
            // Create an interface for reading data from the user

            var n = prompt('Please enter a valid email: ');
            console.log(`\nYou entered: ${n}`);

            return resolve(n)

        } catch (error) {
            return reject("An error occured when read user input from console.")
        }

    });
}


module.exports = { getUserInput };