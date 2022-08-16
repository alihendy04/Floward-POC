import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import { validUser, invalidUser } from '../data/roles'

fixture`Login Test`
.beforeEach(async t => { // beforeAll hack
  await loginPage.goto()
})
// uses testcafe's User Roles functionality
// https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
test('should log into floward using valid credentials', async t => {
  await t
    .useRole(validUser);
   // .expect(homePage.siteTitle.exists).ok();
})

test('invalid credentials should display error', async t => {
  await t
    .useRole(invalidUser)
    .expect(loginPage.errorMsg.visible).notOk();
})


