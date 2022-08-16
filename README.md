
## Testcafe POC
POC of e2e tests written in [Testcafe](https://github.com/DevExpress/testcafe), technology :
- use a page object pattern (now with 100% _less class_)
- are es6y
- use async/await
- run in parallel
- run on multiple browsers
- run headlessly
- run tests on [BrowserStack](https://browserstack.com)

----------------------------------------------------------------------


## Test Report
1.  using Allure reporting framework, this should auto-collect test results in xml format and store it into allure-results folder under allure folder.
1. If tests was run locally and you want to see the allure report, you will need to run two commands, from the E2E root folder in your command line, also you need to make sure you have allure installed globally on your local (npm install -g allure-commandline)
    1. allure generate allure/allure-results --clean -o allure/allure-report (This should generate the report from the allure/allure-results folder)
    1. allure open allure/allure-report (This should open the report in the browser for you, if you manually open it from the browser, it may not load as expected)
1. You should still have a list view of the test results in your terminal also.
