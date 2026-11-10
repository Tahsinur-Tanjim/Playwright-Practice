import {base} from './base.js';
class signUpPage extends base {
  constructor(page) {
    super(page);
    this.registerLink = page.locator('a[href="/register"]');
    this.genderRadioButton = page.locator('#gender-male');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('//input[@value="Register"]');
    this.varifyLogin = page.locator('a[href="/logout"]');
  }


  async clickRegisterLink() {
    await this.clickElement(this.registerLink);
  }

  async clickGenderRadioButton() {
    await this.genderRadioButton.check();
}

  async enterFirstNameInput(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastNameInput(lastName) {
    await this.lastNameInput.fill(lastName);
  } 

  async enterEmailInput(email) {
    await this.emailInput.fill(email);
  }

  async enterPasswordInput(password) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPasswordInput(confirmPassword) {
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async clickRegisterButton() {
    await this.clickElement(this.registerButton);
  }
}
export { signUpPage };
