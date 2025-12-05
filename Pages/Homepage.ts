import {Page} from "@playwright/test";
import { BASE_URL } from "../data/globalData";

export default class HomePage{

	private readonly page;
	private readonly contactUsButton;
    private readonly mortgagesMenu;
    private readonly mortgageCalculatorLink;
    private readonly loansMenu;

	constructor(page: Page) {
		this.page = page;
		this.contactUsButton =  page.getByRole('link', { name: "Contact Us" })
        this.mortgagesMenu = page.getByRole('button', { name: 'Mortgages' })
        this.mortgageCalculatorLink = page.getByRole('link', { name: 'Mortgage Payment Calculator' })
        this.loansMenu=page.getByRole('link', { name: 'Loans' })
	}

async navigate(){
   await this.page.goto(BASE_URL);
}

	async clickContactUs() {
		await this.contactUsButton.click();
	}




async navigateToLoansSection() {
    await this.page.waitForLoadState("domcontentloaded");
    await this.loansMenu.click();

}



}