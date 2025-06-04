import { test, expect } from '@playwright/test';

test.describe('Testing ParaBank Website', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the ParaBank website
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

        // Enter a valid username and password
        await page.locator('[name="username"]').fill('siro'); 
        await page.locator('[name="password"]').fill('siro123');

        // Click the «Log in» button 
        await page.getByRole('button', { name: 'Log In' }).click();

        // Verify that the user is redirected to the "Accounts Overview" page
        await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    });

    test.afterEach(async ({ page }) => {
        // Click the "Logout" button
        await page.getByRole('link', { name: 'Log Out' }).click();

        // Verify that the user is navigated to the home page
        await page.locator('body').click();
    });

    test('Open New Account', async ({ page }) => {       
        // 1: Click on the «Open New Account» link in the menu
        await page.getByRole('link', { name: 'Open New Account' }).click();

        // 2: Select an account type (Savings) from the dropdown
        await page.locator('#type').selectOption('1');

        // 3: Select an existing account to transfer funds into the new account
        await page.locator('#fromAccountId').selectOption('14010');

        // 4: Click the "Open New Account" button
        await page.getByRole('button', { name: 'Open New Account' }).click();

        // 5: Verify that the message “Congratulations, your account is now open.” appears
        await expect(page.getByText('Account Opened! Congratulations, your account is now open')).toBeVisible();
    });


    test('Successful Fund Transfer', async ({ page }) => {
        // 1: Click the "Transfer Funds" link in the menu
        await page.getByRole('link', { name: 'Transfer Funds' }).click();

        // 2: Enter an amount to transfer  
        await page.locator('#amount').fill('100');

        // 3: In the "From Account" dropdown, select an account with available funds 
        await page.locator('#fromAccountId').selectOption('13788');

        // 4: In the "To Account" dropdown, select a different account 
        await page.locator('#toAccountId').selectOption('14010');

        // 5: Click on the "Transfer" button
        await page.getByRole('button', { name: 'Transfer' }).click();

        // 6: Verify that the message «Transfer Complete!» appears
        await expect(page.getByText('Transfer Complete!')).toBeVisible();
    });

    test('Update Contact Information', async ({ page }) => {
        // 1: Click on the "Update Contact Info" link from the navigation menu 
        await page.getByRole('link', { name: 'Update Contact Info' }).click();

        // 2: In the "Phone" field, enter a new valid phone number
        await page.locator('[id="customer\\.phoneNumber"]').click();

        // 3: Click the "Update Information" button to submit the changes 
        await page.getByRole('button', { name: 'Update Profile' }).click();

        // 4: Verify with the message "Profile Updated" 
        await page.locator('body').click();
    });
})