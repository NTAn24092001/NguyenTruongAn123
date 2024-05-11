const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';

test('Enter Password with Password Strength: Weak', async ({ page }) => {
    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    await Signup.signup('An', 'Nguyen', 'nguyentruongan111@gmail.com', '24092001@', '24092001@');
    await expect(page.getByText('Minimum of different classes')).toBeVisible();
    await expect(page.getByText('Minimum of different classes')).toHaveText('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
});