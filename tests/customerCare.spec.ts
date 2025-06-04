import { test, expect } from '@playwright/test';

test('Submit Customer Care form successfully', async ({ page }) => {
    // 1: Navigate to the ParaBank website
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        
    // 2: Click on "Customer Care" (the mail icon)
    await page.getByRole('link', { name: 'contact', exact: true }).click();
    
    // Retrieve input elements by ID (#) and fill in the text fields
    // 3: Fill in a name
    await page.locator('#name').fill('Siro');

    // 4: Fill in a valid email address
    await page.locator('#email').fill('siro@gmail.com');

    // 5: Fill in a valid phone number
    await page.locator('#phone').fill('12345678');

    // 6: Write a message
    await page.locator('#message').fill('Heii!');

    // 7: Click the "Send to Customer Care" button
    await page.getByRole('button', { name: 'Send to Customer Care' }).click();

    // 8: Verify that the confirmation message appears
    await page.getByText('Customer Care Thank you Siro').click();
});
