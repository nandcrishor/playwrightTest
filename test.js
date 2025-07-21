const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  console.log(await page.title()); // should print: "Example Domain"
  await browser.close();
})();
