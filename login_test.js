Feature("Authentification with valid/invalid credentials");

Before(({ I }) => {
    I.amOnPage("/");
});
Scenario("Happy Flow with valid credentials", ({ I, LoginPage }) => {
    LoginPage.goToLoginPage();
    LoginPage.fillLoginForm("silviatestare@gmail.com", "test12");
    LoginPage.checkSuccessfulLogin();
});