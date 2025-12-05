import { test, expect } from "./Fixtures/Hooks";
import HomePage from "../Pages/Homepage";
import CustomerServicePage from "../Pages/CustomerServicePage";
import { CITY_DATA } from "../data/globalData";
import { CITY_INVALID_DATA } from "../data/globalData";




async function goToLocatorPage(homePage: HomePage, customerServicePage: CustomerServicePage) {
  await homePage.clickContactUs();
  await customerServicePage.scrollToBranchLocator();
  await customerServicePage.selectBranchAndATMOption();
  await customerServicePage.clickGoButton();
}



test("Test 01 - Navigate to Branch & ATM Locator page", async ({
  homePage,
  customerServicePage,
  mapLocatorPage
}) => {

    await goToLocatorPage(homePage, customerServicePage);

   expect(await mapLocatorPage.isMapLocatorPageDisplayed()).toBe(true);

});

test("Test 02 - Validate search with valid inputs", async ({
  homePage,
  customerServicePage,
  mapLocatorPage
}) => {

  await goToLocatorPage(homePage, customerServicePage);

  for (const data of CITY_DATA) {
  await mapLocatorPage.searchLocation(data.city);
await mapLocatorPage.scrollToPagination();
  expect(await mapLocatorPage.isPaginationVisible()).toBe(true);
}
});

test("Test 03 - Validate search with invalid inputs", async ({
  homePage,
  customerServicePage,
  mapLocatorPage
}) => {

  await goToLocatorPage(homePage, customerServicePage);

   for (const data of CITY_INVALID_DATA) {

  await mapLocatorPage.searchLocation(data.city);

 expect(await mapLocatorPage.isErrorMessageVisible()).toBe(true);
   }
});

