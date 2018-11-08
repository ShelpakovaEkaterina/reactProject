// const puppeteer = require('puppeteer');

// let browser;
// let page;

// beforeAll(async () => {
//     browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 80,
//         args: ['--window-size=1200,600']
//     });
//     page = await browser.newPage();
//     await page.setViewport({ width: 1200, height: 600 });
// });

// afterAll(() => {
//     browser.close();
// });

// describe('Task page', () => {
//     it('add task', async () => {
//         await page.goto('http://localhost:8080/');
//         await page.waitForSelector('.tasks');
//         await page.waitForSelector('.tasks_loading', { hidden: true });
//         await page.click('input[name=text]');
//         await page.type('input[name=text]', 'ex');
//         await page.click('.add-task-form');
//         await page.screenshot({ path: 'ui-tests/screenshots/error_message.png' });
//         await page.type('input[name=text]', 'ample task');
//         await page.screenshot({ path: 'ui-tests/screenshots/warning_message.png' });
//         await page.waitForSelector('.text-input__message_warning');
//         await page.type('input[name=text]', '123456789');
//         await page.screenshot({ path: 'ui-tests/screenshots/ok.png' });
//         await page.click('button[type=submit]');
//     }, 50000);
// });
