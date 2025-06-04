import { test, expect, type Page } from '@playwright/test';

test.describe('testing factorial calculator', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://qainterview.pythonanywhere.com/');
    })
    test('tests with valid integer 4', async({page}) => {
        let input = '4';
        let expectedAnswer = '24';
     await page.locator('#number').fill(input);
     await page.locator('.btn').click();
     
     await expect(page.locator('#resultDiv'))
     .toContainText(`The factorial of ${input} is: ${expectedAnswer}`);
    })
    test('tests with illegal input', async({page}) => {
      
    })
})