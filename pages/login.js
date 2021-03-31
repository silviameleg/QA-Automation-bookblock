const I = actor();

class LoginPage {
    constructor() {
        this.loginWindow = "#login-modal";
        this.loginOption = '//a[contains(., "Sign In")]';
        this.email = '#login-email';
        this.password = '#login-pass';
        this.keepMeLogedinCheckbox = '#login-keep';
        this.forgottenPass = ".forgotten-pass-link";
        this.logInBtn = '//*[@id="login-form"]/div[5]/input';
        this.facebookLoginBtn = "#facebook-login-login";
        this.googleLoginBtn = "#google-login-login";
        this.subscriptionForm = "#ins-question-group-form";
        this.subscriptionFormExit = "#icon-close-button-1454703945349";
        this.navigationMenu = "#user-nav-menu-head";
        this.myAccountMenu = "My Account";
        this.logoutBtn = ".logout-link";
    };

    goToLoginPage() {
        I.seeElementInDOM(this.loginOption);
        I.click(this.loginOption);
        I.seeElement(this.loginWindow);
    };

    fillLoginForm(email, password) {
        I.fillField(this.email, email);
        I.fillField(this.password, password);
        I.click(this.logInBtn);
    };
    checkSuccessfulLogin() {
        // I.waitForNavigation();
        // if (I.seeElement(this.subscriptionForm)) {
        //     I.click(this.subscriptionFormExit);
        // }
        I.seeElementInDOM(this.navigationMenu);
        I.click(this.myAccountMenu);
        I.seeElement(this.logoutBtn);
    };
}

// For inheritance
exports.LoginPage = LoginPage;
module.exports = new LoginPage();