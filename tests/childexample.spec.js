const {test, expect} = require("@playwright/test")

test.only("child window handles", async ({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

})