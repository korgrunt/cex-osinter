const crypto = require('crypto');
const debug = require('./debug.utils.js');


function getRandomInt(min, max) {
    debug.log("getRandomInt")
  
    const range = max - min + 1;
    const randomBytes = crypto.randomBytes(4); // 4 bytes pour un Uint32
    const randomNumber = randomBytes.readUInt32LE(0) / (0xffffffff + 1);
    const randomInt = Math.floor(randomNumber * range) + min;
    debug.log(randomInt)
  
    return randomInt;
  }
  
  function getRandomFloat(min, max, precision) {
    debug.log("getRandomFloat")
    const range = max - min;
    const randomBytes = crypto.randomBytes(4); // Utilisez 4 octets pour un nombre flottant
    const randomNumber = randomBytes.readUInt32LE(0) / 0xffffffff;
    const randomFloat = (randomNumber * range + min).toFixed(precision);
    const parsedFloat = parseFloat(randomFloat)
    debug.log(parsedFloat)
  
    return parsedFloat
  }

module.exports = { getRandomInt, getRandomFloat };
