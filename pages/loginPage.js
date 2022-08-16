import { Selector as $, t } from 'testcafe'
import basePage from './basePage'
import {screen} from '@testing-library/testcafe';

const loginPage = {
  loginBtn: '#top-head > div > div > nav > div > div.col-10.pt-2.px-0 > ul > li:nth-child(2)',
  url: 'login?url=%2Fen-kw',
  usernameInput: '#login',
  passwordInput: '#login-psw',
  loginBtn:'body > app-root > app-login > div > div > div > form > div > div:nth-child(6) > div > button',
  errorMsg: 'p-toastitem > div > div > div > div.p-toast-detail.ng-tns-c14-39',

  async login (username, password) {
    await t.typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn)
  },

}
export default { ...basePage, ...loginPage }
