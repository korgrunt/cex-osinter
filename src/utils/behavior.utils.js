const randomUtils = require('./random.utils.js');
const numberUtils = require('./number.utils.js');
const timeUtils = require('./time.utils.js');
const debug = require('./debug.utils.js');

/* private */
async function elementToBoundingBox(elm) {
  return new Promise(async (resolve) => {
    debug.log("elementToBoundingBox")
    // Get the bounding box of the element
    const boundingBox = await elm.evaluate(el => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
      };
    });
    return resolve(boundingBox);
  });
}

/* public */
async function humanClick(page, boundingBox) {
  return new Promise(async (resolve) => {
    debug.log("humanClick")

    try {
      await timeUtils.sleep(randomUtils.getRandomInt(200, 2000))

      const randomXmouseOffset = randomUtils.getRandomFloat(0.1, boundingBox.width - 0.1, 5)
      const randomYmouseOffset = randomUtils.getRandomFloat(0.1, boundingBox.height - 0.1, 5)

      debug.log(boundingBox)
      debug.log(numberUtils.addFloat(boundingBox.x, randomXmouseOffset))
      debug.log(numberUtils.addFloat(boundingBox.y, randomYmouseOffset))
      await page.mouse.click(
        numberUtils.addFloat(boundingBox.x, randomXmouseOffset),
        numberUtils.addFloat(boundingBox.y, randomYmouseOffset)
      );

      return resolve(true)
    } catch (error) {
      return resolve(false)
    }

  });
}


async function humanClickOnElm(page, elm) {
  debug.log("humanClickOnElm")

  return new Promise(async (resolve) => {

    // Get the bounding box of the element
    const elementBoundingBox = await elementToBoundingBox(elm);
    await humanClick(page, elementBoundingBox);

    return resolve(true);
  });
}

async function humanClickBySelector(page, selectorStr) {
  debug.log("humanClickOnElm")

  return new Promise(async (resolve) => {

    const element = await page.$(selectorStr);

    if (element) {
      await humanClickOnElm(page, element);
      return resolve(true)
    }
    return resolve(false);
  });
}

async function humanClickByXpath(page, xPathStr) {
  debug.log("humanClickOnElm")

  return new Promise(async (resolve) => {

    const xp = `::-p-xpath(${xPathStr})`;
    const element = await page.waitForSelector(xp);

    if (element) {
      await humanClickOnElm(page, element);
      return resolve(true)

    }

    return resolve(false);
  });
}

async function getInnerTextByXpath(page, xPathStr) {
  debug.log("getInnerTextByXpath")

  return new Promise(async (resolve) => {

    const xp = `::-p-xpath(${xPathStr})`;
    const element = await page.waitForSelector(xp);

    if (element) {
      const innerText = await element.getProperty('innerText');
      const text = await innerText.jsonValue();
      return resolve(text)

    }

    return resolve(false);
  });
}

async function humanFillByXpath(page, xPathStr, valueStr) {
  debug.log("humanClickOnElm")

  return new Promise(async (resolve) => {

    await humanClickByXpath(page, xPathStr)

    for (let i = 0; i < valueStr.length; i++) {
      const char = valueStr[i];
      await page.keyboard.type(char);
      await timeUtils.sleep(randomUtils.getRandomInt(200, 1300))
    }

    return resolve(true);
  });
}



module.exports = {
  humanClick,
  humanClickOnElm,
  humanClickBySelector,
  humanClickByXpath,
  humanFillByXpath,
  getInnerTextByXpath
};
