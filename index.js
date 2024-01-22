const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    try {
      const pathToExtension = '/Application Support/Google/Chrome/Profile 4/Extensions/pdfilhlaihhdainkmnhfjplcnlpoojhn';


      const browser = await puppeteer.launch({
        headless: false,
        executablePath: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`,
        userDataDir: './tmp',
        ignoreDefaultArgs: ['--enable-automation', '--disable-extensions'], //disable testing message
        // defaultViewport: false, //full screen
        timeout: 0,
        args: [
          // `--disable-extensions-except=${pathToExtension}`,
          // `--load-extension=${pathToExtension}`,
          // '--profile-directory=Profile 4',
          // '--user-data-dir=/Application Support/Google/Chrome/User Data',
          '--test-type=gpu', //disable line: Chrome for Testing is only for automated testing. For regular browsing, use a standard version of Chrome that updates automatically
        ]
      });

      const page = await browser.newPage();

      await page.goto('https://www.etsy.com/search?q=valentines+day+shirt&explicit=1&ship_to=US&order=highest_reviews', { waitUntil: 'networkidle2' });
      await page.waitForSelector('.tab-reorder-container');
      await page.waitForSelector('div.heyetsy-tooltip__dang');

      const listItem = await page.$$eval('.tab-reorder-container li', async (lis) => {
        const results = [];

        for (const li of lis) {
          const title = li.querySelector('h3').getAttribute('title');
          const link = li.querySelector('a').getAttribute('href');

          const dangerToolTips = Array.from(li.querySelectorAll('div.heyetsy-tooltip__dang'));
          const tooltipObject = {};

          dangerToolTips.forEach(tooltip => {
            const snakeCaseKey = tooltip.textContent.trim().toLowerCase().replace(/\s+/g, '_');
            const nextElementSibling = tooltip.nextElementSibling;

            if (nextElementSibling && nextElementSibling.tagName.toLowerCase() === 'div') {
              const value = nextElementSibling.querySelector('p') ? nextElementSibling.querySelector('p').textContent.trim() : nextElementSibling.textContent.trim();
              tooltipObject[snakeCaseKey] = value;
            }
          });

          results.push({ title, link, ...tooltipObject });
        }

        return results;
      });

      console.log({listItem});

      // await browser.close();
    } catch (err) {
      console.log(err);
    }
})();