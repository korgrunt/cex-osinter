
const randomUtils = require('./random.utils.js');
const debug = require('./debug.utils.js');

const sleep = (delay) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                return resolve(true);
            }, delay)
        } catch (error) {
            return reject("An error occured when sleep.")
        }

    });
}

const humainWait = (minDelay) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                return resolve(true);
            }, parseInt(minDelay * randomUtils.getRandomFloat(1,2)))
        } catch (error) {
            return reject("An error occured when sleep.")
        }

    });
}



const stop = () => {

    const ONE_SECOND = 1000;
    const ONE_MINUTE = 60 * ONE_SECOND;
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR;


    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                return resolve(true);
            }, ONE_DAY)
        } catch (error) {
            return reject("An error occured when sleep.")
        }

    });
}

module.exports = { sleep, stop, humainWait };
