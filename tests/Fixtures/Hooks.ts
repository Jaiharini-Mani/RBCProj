import { test as base } from "@playwright/test";
import HomePage from "../../Pages/Homepage";
import CustomerServicePage from "../../Pages/CustomerServicePage";
import MapLocatorPage from "../../Pages/MapLocatorPage";
import CarLoanPage from "../../Pages/CarLoanPage";
import CarLoanCalculatorPage from "../../Pages/CarLoanCalculatorPage";

type CustomFixtures = {
  homePage: HomePage;
  customerServicePage: CustomerServicePage;
  mapLocatorPage: MapLocatorPage;
    carLoanPage: CarLoanPage;
      carLoanCalculatorPage: CarLoanCalculatorPage;  


};

export const test = base.extend<CustomFixtures>({

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  customerServicePage: async ({ page }, use) => {
    const customerServicePage = new CustomerServicePage(page);
    await use(customerServicePage);
  },

  mapLocatorPage: async ({ page }, use) => {
    const mapLocatorPage = new MapLocatorPage(page);
    await use(mapLocatorPage);
  },

  carLoanPage: async ({ page }, use) => {
  const carLoanPage = new CarLoanPage(page);
  await use(carLoanPage);
},

  carLoanCalculatorPage: async ({ page }, use) => {
  const carLoanCalculatorPage = new CarLoanCalculatorPage(page);
  await use(carLoanCalculatorPage);
},

});

export const expect = test.expect;

test.beforeEach(async ({ page,homePage }) => {
  await homePage.navigate();

    await page.waitForLoadState("domcontentloaded");

  const acceptCookies = page.getByRole("button", { name: "Accept All Cookies" });

  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
});