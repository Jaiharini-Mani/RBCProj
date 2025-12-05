import { test, expect } from "./Fixtures/Hooks";
import HomePage from "../Pages/Homepage";
import CarLoanPage from "../Pages/CarLoanPage";

async function goToCarLoanCalculator(homePage: HomePage, carLoanPage: CarLoanPage) {
  await homePage.navigateToLoansSection();
  await carLoanPage.goToLoansPage();
  await carLoanPage.clickLearnMore();
  return await carLoanPage.openCalculatorPopup();
}

test("Test01 - Open Car Loan Calculator", async ({ homePage, carLoanPage }) => {

  const popup = await goToCarLoanCalculator(homePage, carLoanPage);

});

test("Feature 2.2 - Validate Car Loan Calculator", async ({ homePage, carLoanPage }) => {

  const calculator = await goToCarLoanCalculator(homePage, carLoanPage);
  await calculator.fillCalculator();
  await expect(calculator.page.getByText(/Calculate your car loan payments/i)).toBeVisible();

});





// test("Feature 2- Car Loan Calculator", async ({ homePage, carLoanPage, page }) => {

//     await carLoanPage.goToLoansPage();

//     await carLoanPage.clickLearnMore();

//     const popup = await carLoanPage.openCalculatorPopup();

//     await carLoanPage.fillCalculator(popup);

//     await expect(popup.getByText(/Calculate your car loan payments/i)).toBeVisible();
// });
