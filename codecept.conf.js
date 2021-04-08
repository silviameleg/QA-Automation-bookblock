const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: './tests/./*_test.js',
    output: './output',
    helpers: {
        Playwright: {
            url: 'https://www.bookblock.com/',
            show: true,
            browser: 'chromium'
        }
    },
    include: {
        I: './steps_file.js',
        LoginPage: './pages/login.js',
        RegistrationPage: './pages/register.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'QA-Automation-bookblock',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}