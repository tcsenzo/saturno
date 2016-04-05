import Senzo from './senzo/senzo';

export default class Binds {
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
