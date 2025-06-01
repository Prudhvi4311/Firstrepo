const { test, expect } = require('@playwright/test');


test.only('First Playwright test', async  ({ browser })=> {

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('input#username').fill("rahulshetty");
    await page.locator('input#password').fill("learnings");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')

});

test.only('second Playwright test', async  ({ browser })=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('input#username');
    const password = page.locator('input#password');
    const signbtn = page.locator("#signInBtn");
    const cardtitle = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await signbtn.click();
    
    console.log(await cardtitle.nth(1).textContent());
    console.log(await cardtitle.first().textContent());
    const alltitles = await cardtitle.allTextContents();
    console.log(alltitles);

});