exports.SignupPage = class SignupPage {
    constructor(page) {
        this.page = page;
        this.firstname_textbox = page.getByLabel('First Name');
        this.lastname_textbox = page.getByLabel('Last Name');
        this.email_textbox = page.getByLabel('Email', { exact: true });
        this.password_textbox = page.getByRole('textbox', { name: 'Password*', exact: true });
        this.confirmpassword_textbox = page.getByLabel('Confirm Password')
        this.signup_button = page.getByRole('button', { name: 'Create an Account' });
    }
    async gotoSignupPage() {
        await this.page.goto('https://magento.softwaretestingboard.com/');
        // Wait for the 'Create an Account link to appear and then click
        await this.page.waitForSelector("//div[@class='panel header']//a[normalize-space()='Create an Account']");
        await this.page.click("//div[@class='panel header']//a[normalize-space()='Create an Account']");
    }
    async signup(firstName, lastName, email, password, confirmPasssword){
        await this.firstname_textbox.click();
        await this.firstname_textbox.fill(firstName);
        await this.lastname_textbox.click();
        await this.lastname_textbox.fill(lastName);
        await this.email_textbox.click();
        await this.email_textbox.fill(email);
        await this.password_textbox.click();
        await this.password_textbox.fill(password);
        // scrollTo(this.confirmpassword_textbox)
        await this.confirmpassword_textbox.click();
        await this.confirmpassword_textbox.fill(confirmPasssword);
        await this.signup_button.click();
    }
}