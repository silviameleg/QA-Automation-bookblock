Feature("Authentification with valid/invalid credentials");

Before((I) => {
    I.amOnPage("/");
});
Scenario("Happy Flow with valid credentials", (I, LoginPage) => {
    LoginPage.goToLoginPage();
    pause()
});