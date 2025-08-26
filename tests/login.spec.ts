import { test, expect } from "@playwright/test";
import { BASE_URL } from "../consts";
import { ADMIN_LOGIN_DETAILS } from "../consts";
import { LoginPage } from "../pom/login.page";
test.describe("Login tests", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(
      ADMIN_LOGIN_DETAILS.username,
      ADMIN_LOGIN_DETAILS.password
    );
    await expect(page.getByText(ADMIN_LOGIN_DETAILS.name)).toBeVisible();
  });
});
