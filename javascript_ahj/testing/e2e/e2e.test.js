import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('checking valid code', async () => {
    await page.goto(baseUrl);
    const form = await page.$('form');
    const input = await page.$('input');
    const button = await form.$('button');
    await input.type('3860095109241923522');
    await button.click();
    const result = await page.evaluate(() => document.querySelector('.result').textContent);
    await expect(result).toBe('Valid');
  });

  test('checking non-valid code', async () => {
    await page.goto(baseUrl);
    const form = await page.$('form');
    const input = await page.$('input');
    const button = await form.$('button');
    await input.type('000998877665544');
    await button.click();
    const result = await page.evaluate(() => document.querySelector('.result').textContent);
    await expect(result).toBe('Not valid');
  });
});
