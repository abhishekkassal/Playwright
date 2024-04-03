const { webkit, firefox, chromium } = require('playwright');
import {test, expect, Browser, Page } from '@playwright/test';

test('login test', async () => {
    const browser:Browser = await chromium.launch({ headless:false});
    const page:Page = await browser.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    const emailId = await page.locator('[name="email"]');
    const password = await page.locator('[name="password"]');
    const loginButton = await page.locator('input[value="Login"]');

    await emailId.fill("123@123.com");
    await password.fill("1234");
    await loginButton.click();

    const title = await page.title();
    console.log(title);
    await page.screenshot({path: 'example.png'});

});