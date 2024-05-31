const debug = require('./debug.utils.js');


const isValidEmail = (email) => {
    // Define a regular expression pattern for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex pattern
    return regex.test(email);
  }

  async function isStringPresentInPage(page, searchString) {
    debug.log("humanClickOnElm")
  
    return new Promise(async (resolve) => {
  
  
      const isStringPresent = await page.evaluate((searchString) => {
        const searchText = document.body.innerText;
        return searchText.includes(searchString);
      }, searchString);
  
      if (isStringPresent) {
        return resolve(true);
      } else {
        return resolve(false);
      }
  
      return resolve(false);
    });
  }
  
module.exports = { isValidEmail, isStringPresentInPage };
