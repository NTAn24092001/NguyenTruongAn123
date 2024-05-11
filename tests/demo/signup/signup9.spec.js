const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';

test('Register the previously created account', async ({ page }) => {
    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    await Signup.signup('An', 'Nguyen', 'nguyentruongan234', '2409@Truongan', '2409@Truongan');
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
    await expect(page.locator('#email_address-error')).toContainText('Please enter a valid email address (Ex: johndoe@domain.com).');
});