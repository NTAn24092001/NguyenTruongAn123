const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';

test('Leave the information blank in Create an account', async ({ page }) => {
    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    await Signup.signup('', '', '', '', '');
    await expect(page.locator('#firstname-error')).toBeVisible();
    await expect(page.locator('#lastname-error')).toBeVisible();
    await expect(page.locator('#email_address-error')).toBeVisible();
    await expect(page.locator('#password-error')).toBeVisible();
    await expect(page.locator('#password-confirmation-error')).toBeVisible();
});