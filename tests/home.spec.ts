import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/login.page";
import { USER_LOGIN_DETAILS } from "../consts";
import { HomePage } from "../pom/home.page";

test.beforeEach("setup", async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.login(
    USER_LOGIN_DETAILS.username,
    USER_LOGIN_DETAILS.password
  );
  setTimeout(async () => {
    await page.reload();
  }, 5000);
});

test("should be able to place order", async ({ page }) => {
  let homePage = new HomePage(page);
  await homePage.selectOrderMeals("Wednesday", "Cry river");
  await expect(homePage.orderSuccessMessage).toBeVisible();
});
