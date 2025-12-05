import { test, expect } from "./Fixtures/Hooks";
import HomePage from "../Pages/Homepage";
import CarLoanPage from "../Pages/CarLoanPage";

async function goToCarLoanCalculator(homePage: HomePage, carLoanPage: CarLoanPage) {
  await homePage.navigateToLoansSection();
  await carLoanPage.goToLoansPage();
  await carLoanPage.clickLearnMore();
  return await carLoanPage.openCalculatorPopup();
}

test("Test04 - Open Car Loan Calculator", async ({ homePage, carLoanPage }) => {

  const popup = await goToCarLoanCalculator(homePage, carLoanPage);

});

test("Test 5- Validate Car Loan Calculator", async ({ homePage, carLoanPage }) => {

  const calculator = await goToCarLoanCalculator(homePage, carLoanPage);
  await calculator.fillCalculator();
  await expect(calculator.page.getByText(/Calculate your car loan payments/i)).toBeVisible();

});


