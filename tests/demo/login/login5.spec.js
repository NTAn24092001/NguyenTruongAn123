import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login';

test('Login with invalid email', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage(); // Need to await for gotoLoginPage

    await Login.login('nguyentruongan22', '2409@Truongan');

    await expect(page.locator("//div[@id='email-error']")).toContainText('Please enter a valid email address (Ex: johndoe@domain.com).');
    
});