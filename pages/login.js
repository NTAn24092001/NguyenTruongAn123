exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.email_textbox = page.getByLabel('Email', { exact: true });
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Sign In' });
    }

    async gotoLoginPage(){
        await this.page.goto('https://magento.softwaretestingboard.com/');
        // Wait for the 'Sign In' link to appear and then click
        await this.page.waitForSelector("//div[@class='panel header']//a[contains(text(),'Sign In')]");
        await this.page.click("//div[@class='panel header']//a[contains(text(),'Sign In')]");
    }

    async login(email, password){
        await this.email_textbox.click();
        await this.email_textbox.fill(email);
        await this.password_textbox.click();
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
};