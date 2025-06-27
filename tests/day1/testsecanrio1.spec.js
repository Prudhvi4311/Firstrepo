const { test, expect } = require("@playwright/test")


let page;

test.beforeAll("login to the browser", async ({ browser }) => {
    const context = await browser.newContext()
    page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

     expect(page.url()).toContain('seleniumPractise/#/');
})

test("Add product to cart and click on top deals", async () => {
    const buttons = await page.locator("div.products-wrapper button[type='button']")

    const count = await buttons.count();

    console.log("Button count:", count);
    expect(count).toBeGreaterThan(0); // ✅
})