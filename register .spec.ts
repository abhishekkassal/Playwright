const { webkit, firefox, chromium } = require('playwright');
import {test, expect, Browser, Page } from '@playwright/test';

test('login test', async () => {
    const browser:Browser = await chromium.launch({ headless:false});
    const page:Page = await browser.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    const firstname = await page.locator('[name="firstname"]');
    const lastname = await page.locator('[name="lastname"]');
    const email = await page.locator('[name="email"]');
    const telephone = await page.locator('[name="telephone"]');
    const password = await page.locator('[name="password"]');
    const confirm = await page.locator('[name="confirm"]');


    const loginButton = await page.locator('input[value="Continue"]');

    await firstname.fill("Abhi");
    await lastname.fill(".....");
    await email.fill("12345@12345.com");
    await telephone.fill("1234567890");
    await password.fill("12345");
    await confirm.fill("12345");

    await loginButton.click();

    const title = await page.title();
    console.log(title);
    await page.screenshot({path: 'example.png'});

});