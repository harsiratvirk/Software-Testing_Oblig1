/* import { test, expect } from '@playwright/test';

// Test case: Login User with correct Email and Password

test('Login User with correct email and password', async ({ page }) => {
    // 1. Launch browser & navigate to the URL
    await page.goto('https://automationexercise.com');
    
    // 2. Verify that home page is visible successfully
    await expect(page.locator('body')).toBeVisible()

  // 4. Click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();
    
    // 3. Verify 'Login to your account' is visible
    await expect(page.locator('h2')).toHaveText('Login to your account');

    // 4. Enter correct email address and password
    await page.locator('Email adress').fill('testuser@example.com');
    await page.locator('Password').fill('password123');

    // 5. Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // 6. Verify that 'Logged in as username' is visible
    await expect(page.locator('.logout')).toHaveText('Logged in as user');
}); */
