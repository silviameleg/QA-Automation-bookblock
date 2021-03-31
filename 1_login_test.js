const LoginData = require("./DataProvider/loginCredentialsProvider.js");


Feature("Authentification with valid/unvalid credentials");

Before(({ I }) => {
    I.amOnPage("/");
});

Scenario("Happy Flow with valid credentials", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm(LoginData.validEmail, LoginData.validPassword);
    LoginPage.checkSuccessfulLogin();
});

Scenario("Sad Flow with invalid credentials", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm(LoginData.invalidEmail, LoginData.invalidPassword);
    LoginPage.checkUnsuccessfullLogin();
});

Scenario("Sad Flow with invalid email and valid password", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm(LoginData.invalidEmail, LoginData.validPassword);
    LoginPage.checkUnsuccessfullLogin();
});

Scenario("Sad Flow with valid email and invalid password", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm(LoginData.validEmail, LoginData.invalidPassword);
    LoginPage.checkUnsuccessfullLogin();
});

Scenario("Sad Flow with valid email and empty password", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm(LoginData.invalidEmail, "");
    LoginPage.checkUnsuccessfullLogin();
});

Scenario("Sad Flow with empty email and valid password", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm("", LoginData.invalidPassword);
    LoginPage.checkUnsuccessfullLogin();
});