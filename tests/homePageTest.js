import { validUser } from '../data/roles'
import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'

fixture`Home Page`
  .beforeEach(async t => { // beforeAll hack
    await homePage.goto()
  })

// Test all Categories title is visible
test('should access gifts category ', async t => {
  await homePage.OpenCategory()
})

test('should add single product to cart', async t => {
  await homePage.OpenCategory()

  // hover product
  await t.hover(homePage.productlisting)
  await t.click(homePage.addProductToCart)
        .click(homePage.continueToAddress);
})

test('should add extra product to cart', async t => {
  await homePage.OpenCategory()
  await t.hover(homePage.productlisting)
    .click(homePage.addProductToCart)
    .click(homePage.extraProduct)
    .click(homePage.continueToCheckoutBtn)
    .click(homePage.continueToAddress)
})

test('should add product to cart from search', async t => {
  await homePage.searchProduct('Anthurium DIY Box');
  await t.hover(homePage.productlisting)
    .click(homePage.addProductToCart)
    .click(homePage.extraProduct)
    .click(homePage.continueToCheckoutBtn)
    .click(homePage.continueToAddress)
})

test('should add product to cart from product inner page', async t => {
  await homePage.searchProduct('Anthurium DIY Box');
  await t.click(homePage.productImage)
  .click(homePage.productInnerPageAddToCart);

})


test.before(async (t) => {
  await loginPage.goto();
  await t
    .useRole(validUser);
})('logged in user add product to cart', async t => {
  await homePage.goto();
  await homePage.OpenCategory()

  // hover product
  await t.hover(homePage.productlisting)
  await t.click(homePage.addProductToCart)
        .click(homePage.continueToAddress);
})