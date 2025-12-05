import { Page } from "@playwright/test";

export default class CustomerServicePage {

  private readonly page;
  private readonly customerServiceHeader;
  private readonly branchLocator;
  private readonly branchAndATMRadioButton;
  private readonly goButton;

  constructor(page: Page) {
    this.page = page;
    this.customerServiceHeader = page.getByRole('heading', { name: 'Customer Service' });
    this.branchLocator = page.getByRole('heading', { name: /Find a Branch/i }); 
    this.branchAndATMRadioButton = page.locator('label[for="branch"]'); 
    this.goButton = page.getByRole('button', { name: 'GO' });
  }

  async isCustomerServiceHeaderVisible(): Promise<boolean> {
    return await this.customerServiceHeader.isVisible();
  }

  async isBranchLocatorVisible(): Promise<boolean> {
    return await this.branchLocator.isVisible();
  }

  async scrollToBranchLocator() {
    await this.branchLocator.scrollIntoViewIfNeeded();
  }

  async selectBranchAndATMOption() {
    await this.branchAndATMRadioButton.click(); 
  }

  async clickGoButton() {
    await this.goButton.click();
  }

}
