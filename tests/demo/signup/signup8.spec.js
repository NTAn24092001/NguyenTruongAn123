const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';
import { LoginPage } from '../../../pages/login';

test('Check the title of Create an account', async ({ page }) => {
    const Login = new LoginPage(page);

    await Login.gotoLoginPage(); // Need to await for gotoLoginPage

    await page.locator("//a[@class='action create primary']//span[contains(text(),'Create an Account')]").click();

    await expect(page).toHaveTitle('Create New Customer Account');
});