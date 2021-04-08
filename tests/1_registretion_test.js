// const RegistratioData = require("../DataProvider/registrationCredentials.js");

Feature("Registration with valid/unvalid credentials");

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario("Happy Flow with valid credentials", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "test", "silviatestare+08044@gmail.com", "test12");
    RegistrationPage.checkSuccessfulLogin();
});

Scenario("Sad Flow with already registered email", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "test", "silviatestare+08043@gmail.com", "test12");
    RegistrationPage.checkUnsuccessfulLogin();
});

Scenario("Sad Flow with empty first name", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("", "test", "silviatestare+08043@gmail.com", "test12");
    RegistrationPage.checkUnsuccessfulLogin();
});

Scenario("Sad Flow with empty last name", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "", "silviatestare+08043@gmail.com", "test12");
    RegistrationPage.checkUnsuccessfulLogin();
});

Scenario("Sad Flow with empty email", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "test", "", "test12");
    RegistrationPage.checkUnsuccessfulLogin();
});

Scenario("Sad Flow with invalid email", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "test", "silviatestare+08043", "test12");
    RegistrationPage.checkUnsuccessfulLogin();
});

Scenario("Sad Flow with empty password", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "test", "silviatestare+08043@gmail.com", "");
    RegistrationPage.checkUnsuccessfulLogin();
});

Scenario("Sad Flow with invalid password", ({ I, RegistrationPage }) => {
    RegistrationPage.goToRegistrationPage();
    RegistrationPage.fillRegistrationForm("test", "test", "silviatestare+08043@gmail.com", "12");
    RegistrationPage.checkUnsuccessfulLogin();
});