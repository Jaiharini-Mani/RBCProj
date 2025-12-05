import { Page } from "@playwright/test";

export default class MapLocatorPage {

private readonly page;
private readonly isMapLocatorPageVisible;
private readonly searchInput;
private readonly searchButton;
private readonly pagesList;
private readonly errorMessage;

constructor(page: Page) {
    this.page = page;
    this.isMapLocatorPageVisible = page.getByRole("button", { name: "Submit Search" });
    this.searchInput =  page.locator('#search-input-desktop').first();
    this.searchButton = page.getByRole("button", { name: "Submit Search" });
    this.pagesList = page.locator('.map-sidebar-pagination-page-now');
    this.errorMessage = page.locator('#error-search-input-desktop');


}

async isMapLocatorPageDisplayed(): Promise<boolean> {
   await this.page.waitForTimeout(2000);
    return await this.isMapLocatorPageVisible.isVisible();
//  await this.isMapLocatorPageVisible.waitFor({ state: "visible", timeout: 5000 });
//   return true;
}

async searchLocation(location: string) {
    await this.searchInput.fill(location);
    await this.searchButton.click();
   
}

async scrollToPagination() {
  await this.pagesList.scrollIntoViewIfNeeded();
}


async isPaginationVisible(): Promise<boolean> {
    return await this.pagesList.isVisible();
}

async isErrorMessageVisible(): Promise<boolean> {
await this.errorMessage.waitFor({ state: "visible", timeout: 5000 });
return await this.errorMessage.isVisible();
}


}