import {base} from './base.js';
class LoginPage extends base {
  constructor(page) {
    super(page);
    this.loginLink = page.locator('a[href="/login"]');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.Checkbox = page.locator('#RememberMe');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.verifyLogin = page.locator('a[href="/logout"]');
  }

  async clickLoginLink() {
    await this.clickElement(this.loginLink);
  }
 

  async enterEmailInput(email) {
    await this.emailInput.fill(email);
  }

  async enterPasswordInput(password) {
    await this.passwordInput.fill(password);
  }

     async rememberMeCheckbox() {
    await this.Checkbox.check();
  }

  async clickLoginButton() {
    await this.clickElement(this.loginButton);
  }
}
export { LoginPage };
