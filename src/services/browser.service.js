const randomUtils = require('./../utils/random.utils.js');
const debug = require('./../utils/debug.utils.js');
const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Ajouter le plugin stealth
puppeteer.use(StealthPlugin());

const getBrowserAndPage = () => {
  return new Promise(async (resolve, reject) => {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--disable-blink-features=AutomationControlled',
      ]
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
      window.navigator.chrome = { runtime: {} };
      Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
    });

    debug.log("before sleep")

    debug.log("after sleep")
    await page.setViewport({ width: randomUtils.getRandomInt(1280, 1450), height: randomUtils.getRandomInt(800, 950) });

    return resolve({ browser, page })


  });
}

module.exports = { getBrowserAndPage };