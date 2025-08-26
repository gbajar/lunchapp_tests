import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login.page";
import "../consts";

export class HomePage {
  readonly page: Page;
  readonly menuHamburger: Locator;
  readonly weekdayButtons: Locator;
  readonly supplierButtons: Locator;
  readonly orderSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuHamburger = page.getByRole("button").filter({ hasText: "menu" });
    this.orderSuccessMessage = page.locator(".v-snack__content");
  }

  async selectOrderMeals(weekday: string, supplierName: string) {
    await this.page.getByText(weekday).click();
    await this.page
      .getByText("color_lens" + supplierName)
      .nth(1)
      .click();
    if (
      (await this.page.locator(".v-chip__content").textContent()) ===
      "Papildoma"
    ) {
      await this.page.getByRole("main").getByText("Normali").click();
    } else {
      await this.page.getByRole("main").getByText("Papildoma").click();
    }

    await this.page
      .locator(
        "button.orders-list-button.v-btn.v-btn--round.theme--dark.secondary"
      )
      .click();
  }
}
