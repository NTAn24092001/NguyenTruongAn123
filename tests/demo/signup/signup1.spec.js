const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';

test('Register the previously created account', async ({ page }) => {
    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    await Signup.signup('An', 'Nguyen', 'nguyentruongan33@gmail.com', '2409@Truongan', '2409@Truongan');
    await expect(page.getByText('There is already an account')).toBeVisible();
    await expect(page.getByText('There is already an account')).toHaveText('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
});