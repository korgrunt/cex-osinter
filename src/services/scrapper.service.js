
const timeUtils = require('./../utils/time.utils.js');
const strUtils = require('./../utils/str.utils.js');
const debug = require('./../utils/debug.utils.js');
const randomUtils = require('./../utils/random.utils.js');
const behaviorUtils = require('./../utils/behavior.utils.js');
const browserService = require('./../services/browser.service.js')



const execTargetScrapping = async (target, email) => {
    return new Promise((resolve) => {
        try {
            setTimeout(() => {
                return resolve(false)

            }, 3000)

        } catch (error) {
            return resolve(false)
        }

    });
}

const startRandomMouseMove = (page) => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const moveMouse = async () => {
        const x = getRandomInt(0, page.viewport().width);
        const y = getRandomInt(0, page.viewport().height);
        await page.mouse.move(x, y);
    };

    const mouseInterval = setInterval(async () => {
        console.log("ok random MOUSE")
        await moveMouse();
    }, getRandomInt(500, 1500));

    // Arrêter le mouvement de la souris après un certain temps pour éviter les boucles infinies
    setTimeout(() => clearInterval(mouseInterval), 60000);
};

const scrollToXPath = async (page, xpath) => {
    const element = await page.$x(xpath);
    if (element.length > 0) {
        await page.evaluate((element) => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, element[0]);
    } else {
        console.error('Élément non trouvé pour le XPath:', xpath);
    }
};

const scrappeTarget = async (target, email) => {
    return new Promise(async (resolve) => {
        try {


            console.log(`\n Currenlty search for a ${target.name} account for ${email}`)
            // Launch the browser and open a new blank page
            const { browser, page } = await browserService.getBrowserAndPage();
            await page.goto(target.url);

            //startRandomMouseMove(page);
            /* STEP EXECUTION ENGIN  */

            //
            let stepsValidator = [];

            const targetSteps = target.steps;
            if (targetSteps.length == 0) {
                debug.log("target doesn't have any step to iterate for simulate user, can't check email, please, contact administratore for add steps to the target in the targets.js file or add it by yourself")
                return resolve(false);
            }

            for (idx in target.steps) {
                let stepValidation = false;
                const currentStep = target.steps[idx];

                debug.log(`STEP => ${currentStep.name}`);

                await timeUtils.humainWait(currentStep.delayBefore);
                if (currentStep.action == "wait") {
                    stepValidation = true;
                } else if (currentStep.action == "click") {
                    stepValidation = currentStep.xpath !== false ? await behaviorUtils.humanClickByXpath(page, currentStep.xpath) : await behaviorUtils.humanClickBySelector(page, currentStep.cssSelector);
                } else if (currentStep.action == "fill") {
                    const valueToFill = (currentStep.value && typeof currentStep.value === 'string' && currentStep.value.length > 0) ? currentStep.value : email;
                    stepValidation = await behaviorUtils.humanFillByXpath(page, currentStep.xpath, valueToFill);
                } else if (currentStep.action == "check") {
                    // should add a piece of code for specify xpath to check the string presence
                    stepValidation = await strUtils.isStringPresentInPage(page, currentStep.value);
                } else if (currentStep.action == "type-enter") {
                    await page.keyboard.press('Enter');
                    stepValidation = true;
                } else if (currentStep.action == "scroll-down") {
                    await page.keyboard.press("PageDown");
                    stepValidation = true;
                }
                await timeUtils.humainWait(currentStep.delayAfter);


                if (currentStep.requiredTrue) {
                    stepsValidator.push(stepValidation)
                }
            }

            const hasAccount = stepsValidator.every(value => value === true);
            /*-----------------------------------------------------------------*/


            if (hasAccount) {
                debug.log(email + " has an account on " + target.name + ", for sure !!")
            } else {
                debug.log("we can't confirmate " + email + " has an account on " + target.name + ", but maybe he has one!!")
            }

            debug.log("end step")



            await browser.close();
            if (hasAccount) {
                console.log(`✔️ ${email} have an account on ${target.name}`)
            } else {
                console.log(`❌ ${email} have maybe an account on ${target.name}, we can't confirm this for now`)
            }
            return resolve(true);
        } catch (error) {
            return resolve(false);
        }
    });
}



const scapperEngine = (targets, email) => {
    return new Promise(async (resolve) => {
        if (targets.length == 0) {
            console.log("No target specified, go fill the /tager.js file with correct syntax.")
            return resolve(false);
        }
        console.log(`We search for email ${email}.`)

        for (index in targets) {
            if (targets[index].active) {
                await scrappeTarget(targets[index], email)
            }
        }
    });
}

module.exports = {
    scapperEngine
}