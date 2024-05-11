import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login';

test('Login successfully', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage(); // Need to await for gotoLoginPage

    await Login.login('nguyentruongan22@gmail.com', '2409@Truongan');

    await expect(page.getByRole('banner').getByText('Welcome, An Nguyen!')).toBeVisible();
    
});