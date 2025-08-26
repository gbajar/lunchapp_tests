import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/login.page.ts";
import { AdminPage } from "../pom/admin.page.ts";
import { ADMIN_LOGIN_DETAILS } from "../consts.js";

test.describe("Admin page tests", () => {
  test("should add a provider by filling all details", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(
      ADMIN_LOGIN_DETAILS.username,
      ADMIN_LOGIN_DETAILS.password
    );
    await expect(page.getByText("Admin 6")).toBeVisible();
    const adminPage = new AdminPage(page);
    await adminPage.addProvider(); // fills provider details
  });
});
