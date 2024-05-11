const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';

test('Check the title of Create an account', async ({ page }) => {
    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    await expect(page).toHaveTitle('Create New Customer Account');
});