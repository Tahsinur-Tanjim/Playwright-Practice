// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
//import { loginData } from '../testData/testData.js';

import XLSX from 'xlsx';

const dataNote = XLSX.readFile('C:\\Users\\User\\Downloads\\LoginData.xlsx');

const sheet = dataNote.Sheets[dataNote.SheetNames[0]];
const loginData = XLSX.utils.sheet_to_json(sheet);


//console.log(loginData); // Log the login data to verify it's being imported correctly
 
for(let i = 0; i < loginData.length; i++) {
  test(`Login for existing user ${i + 1}`, async ({ page }) => {

  const login = new LoginPage(page);

  await login.pageOpen();
  await login.clickLoginLink();
  page.setDefaultTimeout(2000); // Set the default timeout to 60 seconds
  //await login.enterEmailInput('tanjimtest1011@gmail.com');
  await login.enterEmailInput(loginData[i].Email);
  page.setDefaultTimeout(2000);
  //await login.enterPasswordInput('Password123');
  await login.enterPasswordInput(loginData[i].Password);
  await login.rememberMeCheckbox();
  await login.clickLoginButton();
  await expect(login.verifyLogin).toBeVisible();
  await page.waitForTimeout(2000) // Wait for 2 seconds before closing the browser
  //await page.pause();

});
}


