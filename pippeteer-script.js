/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/login');
    await page.type('#username', 'admin');
    await page.type('#password', 'password');
    await page.click('[type="submit"]');
    await page.waitForNavigation();
    // close session for next run
    await page.close();
  };