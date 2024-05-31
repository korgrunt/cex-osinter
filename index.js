const uiUtils = require('./src/utils/ui.utils.js');
const uiService = require('./src/services/ui.service.js');
const scrapperService = require('./src/services/scrapper.service.js');
const strUtils = require('./src/utils/str.utils.js');
const debug = require('./src/utils/debug.utils.js');
const targets = require('./targets.js');

async function main() {

    uiUtils.printBanner();

    uiUtils.printSupportedTarget(targets.targets);

    let running = true;
    let maxTryBeforeEndProgram = 3;

    while (running && maxTryBeforeEndProgram > 0) {
        
        try {
            const userInput = await uiService.getUserInput();

            if (strUtils.isValidEmail(userInput)) {
                const email = userInput;
                uiUtils.printStartScrapping(email);
                await scrapperService.scapperEngine(targets.targets, email);
                uiUtils.printEndScrapping(email);
            } else if (userInput.includes("quit")) {
                running = false;
            } else {
                maxTryBeforeEndProgram--;
                uiUtils.printMsg(`Invalid input, only ${maxTryBeforeEndProgram} remaining`);
            }
        } catch (error) {
            debug.log(error);
            uiUtils.printMsg("An erro occured")
            running = false;
        }
    }
    uiUtils.printByeByeBanner();
}

main();
