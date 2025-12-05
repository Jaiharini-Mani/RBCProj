import { Page } from "@playwright/test";
import CarLoanCalculatorPage from "./CarLoanCalculatorPage";

export default class CarLoanPage {

  private readonly page;
  private readonly loansMenu;
  private readonly learnMoreLink;
  private readonly calculatorLink;

  constructor(page: Page) {
    this.page = page;
    this.loansMenu = page.getByRole("button", { name: "Loans" });
    this.learnMoreLink = page.getByRole("link", { name: "Learn More" }).nth(1);
    this.calculatorLink = page.getByRole("link", { name: "Calculate opens in a new window" });
  }


  async goToLoansPage() {
    await this.loansMenu.click();
  }

  async clickLearnMore() {
    await this.learnMoreLink.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  
  async openCalculatorPopup() {

    const popupPromise = this.page.waitForEvent("popup");
    await this.calculatorLink.scrollIntoViewIfNeeded();
    await this.calculatorLink.click();
    const calculatorWindow = await popupPromise;
    await calculatorWindow.waitForLoadState("domcontentloaded");
 return new CarLoanCalculatorPage(calculatorWindow);  
}

}
