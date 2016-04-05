export default class Helpers {
  constructor() {
    this.$overlay = $(`.overlay`);
    this.$sideMenu = $(`.side-menu`);
  }

  showOverlay() {
    this.$overlay.show();
  }
  hideOverlay() {
    this.$overlay.hide();
  }
  showSideMenu() {
    this.$sideMenu.css(`left`, 0);
  }
  hideSideMenu() {
    this.$sideMenu.css(`left`, `-310px`);
  }
}
