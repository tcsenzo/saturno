import Senzo from './senzo/senzo';

/* global $ */
export default class sideMenu {
  constructor() {
    this.helpers = new Senzo().helpers;
    this.bindClicks();
  }
  bindClicks() {
    let that = this;
    $(`.menu-toggle`).on(`click`, () => {
      that.helpers.showSideMenu();
      that.helpers.showOverlay();
    });

    $('.side-menu .close').on('click', () => {
      that.helpers.hideSideMenu();
      that.helpers.hideOverlay();
    });
  }
}
