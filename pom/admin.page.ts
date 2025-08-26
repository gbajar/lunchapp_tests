import type { Page } from "@playwright/test";
import { BASE_URL } from "../consts";

export class AdminPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(`${BASE_URL}`);
  }

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Log In" }).click();
  }

  async addProvider() {
    await this.page.getByText("Lunch Editing").click();

    await this.page
      .locator("i.v-icon.material-icons", { hasText: "close" })
      .hover();

    const addButton = this.page.locator("i.v-icon.material-icons", {
      hasText: "add",
    });
    await addButton.waitFor({ state: "visible" });
    await addButton.click({ force: true });

    const randomProviderName = `iTrello${Math.floor(Math.random() * 10000)}`;
    await this.page
      .getByRole("combobox", { name: "Provider Name" })
      .fill(randomProviderName);

    await this.page.getByRole("combobox", { name: "Color" }).click();
    await this.page.locator("a").filter({ hasText: "Green" }).first().click();

    await this.page
      .locator('input[aria-label="Price"][name="Sriubos (Soups) category"]')
      .fill("4");
    await this.page
      .locator('input[name="Sriubos (Soups) category"][aria-label="Count"]')
      .fill("20");
    await this.page
      .locator('div:has-text("Sriubos (Soups)")')
      .locator('input[aria-label="Selection Name"]')
      .first()
      .fill("Beetroot Soup");
    await this.page
      .locator('div:has-text("Sriubos (Soups)")')
      .locator('input[aria-label="Translation"]')
      .first()
      .fill("Saltibarsciai");

    await this.page.getByText("Pagrindiniai Patiekalai").click();
    await this.page
      .locator(
        'input[name="Pagrindiniai Patiekalai (Main Dishes) category"][aria-label="Price"]'
      )
      .fill("7");
    await this.page
      .locator(
        'input[name="Pagrindiniai Patiekalai (Main Dishes) category"][aria-label="Count"]'
      )
      .fill("20");
    await this.page
      .locator(
        'input[name="Pagrindiniai Patiekalai (Main Dishes) category"][aria-label="Selection Name"]'
      )
      .fill("Yummy dish");
    await this.page
      .locator('div:has-text("Pagrindiniai Patiekalai")')
      .locator('input[aria-label="Translation"]')
      .first()
      .fill("Skaniukas");

    await this.page.getByRole("button", { name: "Save" }).click();
    await this.page.pause();
  }
}
