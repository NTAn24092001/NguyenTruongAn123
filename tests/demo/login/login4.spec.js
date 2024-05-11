import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login';

test('Login with wrong email and password', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage(); // Need to await for gotoLoginPage

    await Login.login('nguyentruongan2409@gmail.com', '24092001@Truong');

    await expect(page.getByText('The account sign-in was')).toBeVisible();
    
});