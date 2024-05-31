const DEBUG = false;

const log = (msg) => {
    if(DEBUG == true){
        console.log(msg)
    }
}

module.exports = { log };
