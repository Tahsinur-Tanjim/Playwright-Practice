// @ts-check
import { test, expect } from '@playwright/test';
import { signUpPage } from '../pages/SignUpPage.js';

test('Register for new user', async ({ page }) => {
  const signUp = new signUpPage(page);
  await signUp.pageOpen();
  await signUp.clickRegisterLink();
  await page.waitForTimeout(2000) // Wait for 2 seconds before closing the browser

  await signUp.clickGenderRadioButton();
  await signUp.enterFirstNameInput('Tanjim');  
  await signUp.enterLastNameInput('Islam');
  await page.waitForTimeout(2000)// Wait for 2 seconds before closing the browser

  await signUp.enterEmailInput('tanjimtest1011@gmail.com');
  await signUp.enterPasswordInput('Password123');
  await page.waitForTimeout(2000)//Wait for 2 seconds before closing the browser

  await signUp.enterConfirmPasswordInput('Password123');
  await signUp.clickRegisterButton();
  await expect(signUp.varifyLogin).toBeVisible();
  await page.waitForTimeout(2000) // Wait for 2 seconds before closing the browser
  //await page.pause();

});

