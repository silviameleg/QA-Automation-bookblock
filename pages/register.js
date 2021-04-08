const I = actor();

class RegistrationPage {
    constructor() {
        this.loginWindow = "#login-modal";
        this.loginOption = '//a[contains(., "Sign In")]';
        this.registrationWindow = "#register-form-step-1";
        this.newUserLine = '#new-user-line';
        this.createAccountLink = '//*[@id="login-modal-right"]/div[2]/div';
        this.fname = "#registration-first-name";
        this.lname = "#registration-last-name";
        this.email = "#honeypot";
        this.password = "#registration-pass";
        this.createAccountBtn = "#account-creation-button";
        this.emailSubscription = '#ins-email-collection-adaptive';
        this.emailSubscriptionExitBtn = '#icon-close-button-1454703945349';
        this.logoutBtn = '.logout-link';
    };
    goToRegistrationPage() {
        I.click(this.loginOption);
        I.seeElement(this.loginWindow);
        I.seeElement(this.newUserLine);
        I.click(this.createAccountLink);
        I.seeElement(this.registrationWindow);
    };
    fillRegistrationForm(fname, lname, email, password) {
        I.fillField(this.fname, fname);
        I.fillField(this.lname, lname);
        I.fillField(this.email, email);
        I.fillField(this.password, password);
        I.click(this.createAccountBtn);
    };
    checkSuccessfulLogin() {
        I.waitForText('ENJOY 5% OFF', 10, '#ins-editable-text-1454703513212');
        I.seeElement(this.emailSubscription);
        I.click(this.emailSubscriptionExitBtn);
        I.seeElement(this.logoutBtn);
    };

    checkUnsuccessfulLogin() {
        I.seeElement('.error');
        I.dontSeeElement('.logout-link');
    };

};

// For inheritance
exports.RegistrationPage = RegistrationPage;
module.exports = new RegistrationPage();