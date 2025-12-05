import { Page } from "@playwright/test";

export default class CarLoanCalculatorPage {

   readonly page;

  private readonly vehicleTypeRadio;
  private readonly ageDropdown;
  private readonly termDropdown;
  private readonly getResultsButton;

  constructor(page: Page) {
    this.page = page;

    this.vehicleTypeRadio = page.getByRole("radio", { name: "Car or Truck" });
    this.ageDropdown = page.getByLabel("Age of Vehicle:");
    this.termDropdown = page.getByLabel("Loan Repayment Period:");
    this.getResultsButton = page.getByRole("button", { name: "Get Results" });
  }


  async fillCalculator() {
    await this.vehicleTypeRadio.click();
    await this.ageDropdown.selectOption("5");
    await this.termDropdown.selectOption("1");
    await this.getResultsButton.click();
  }
}
