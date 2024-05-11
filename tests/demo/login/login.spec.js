import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login';

test('Check Title of the page', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage(); // Need to await for gotoLoginPage

    await expect(page).toHaveTitle('Customer Login');
    
});