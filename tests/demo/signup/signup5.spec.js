const { test, expect } = require('@playwright/test');
import { SignupPage } from '../../../pages/signup';

test('Enter Password with Password Strength: Strong', async ({ page }) => {
    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    // Trong quá trình sign up thì em đã test với email này nên là khi sign up thì chúng ta nên thay đổi lại email để có thể đăng kí thành công
    await Signup.signup('An', 'Nguyen', 'nguyentruongan666@gmail.com', '24092001@Tru', '24092001@Tru');
    await page.goto('https://magento.softwaretestingboard.com/customer/account/');
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/');
    await expect(page.getByText('An Nguyen nguyentruongan666@')).toBeVisible();
    await expect(page.getByText('Thank you for registering')).toBeVisible();
    await expect(page.getByText('Thank you for registering')).toHaveText('Thank you for registering with Main Website Store.')
});