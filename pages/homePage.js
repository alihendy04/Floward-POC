import { t, Selector as $, Selector } from 'testcafe';
import { findByLabelText, screen } from '@testing-library/testcafe';
import basePage from './basePage'

const homePage = {
  url: '',
  // include modules...
  exploreCategories: '.class="header-color bold-font mb-10 title text-left"',
  giftsCategory: 'body > app-root > app-home > div.home-page > app-explore-categories > div > div > div:nth-child(2) > div > div > div.first-category > a > div > div > div > img',
  addProductToCart: 'body > app-root > app-product-list > div > div.container.mt-3 > div > div.col-md-9.col-lg-9.col-xl-9.custom-container > div > div > app-product-item:nth-child(1) > div.col-12.row.m-0.product-item.p-0 > div > div.col-12.p-0.ng-star-inserted > button > span',
  continueToCheckoutBtn: Selector('button').withText('Continue'),
  continueToAddress: Selector ('button').withText('Continue To Address'),
  productlisting: 'body > app-root > app-product-list > div > div.container.mt-3 > div > div.col-md-9.col-lg-9.col-xl-9.custom-container > div > div > app-product-item:nth-child(1) > div.col-12.row.m-0.product-item.p-0 > a > div > picture > img',
  extraProduct: 'table > thead > tr > td:nth-child(1) > div > div > a > div.add-btn-container > button',
  searchBox: '#search-mobile',
  searchIcon: '#menu > ul.navbar-nav.navbar-nav-ul.h-76 > li.nav-item.dropdown.show.search-input > form > ul > li.list-inline-item.mx-0 > img',
  productImage: 'body > app-root > app-product-list > div > div.container.mt-3 > div > div.col-md-9.col-lg-9.col-xl-9.custom-container > div > div > app-product-item > div.col-12.row.m-0.product-item.p-0 > a > div > picture > img',
  productInnerPageAddToCart: 'body > app-root > app-product-details > section > div > div > div > div.pro-details.col-12.col-lg-5.col-md-5 > div > div.col-12.add-basket-product > div.row.mt-5.ng-star-inserted > div.col-12.add-to-cart-area.text-center > button',



  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists (postTitle) {
    return await $('a').withText(postTitle).exists
  },

  /**
   * Page back till we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByPaging (postTitle) {
    await t.click(this.loadMoreBtn)
    return await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle)
  },

  async OpenCategory () {
    await t
      .click(homePage.giftsCategory)
  },

  async hitEnter () {
    await t.pressKey('enter');
  },

  async searchProduct (searchtext){
    await t.typeText(this.searchBox, searchtext);
    await this.hitEnter();
    


  }
}
export default { ...basePage, ...homePage }