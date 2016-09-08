var Helpers = require('./helpers');

function SideMenu() {
  this.helpers = new Helpers();
  this.binds();
}

SideMenu.prototype.binds = function() {
  var that = this;

  $(`.menu-toggle`).on(`click`, {that: this}, this.onOpenMenu);
  $('.side-menu .close-side-menu').on('click', {that: this}, this.onCloseMenu);
};

SideMenu.prototype.onOpenMenu = function (e) {
  var that = e.data.that;

  that.helpers.showSideMenu();
  that.helpers.showOverlay();
};

SideMenu.prototype.onCloseMenu = function (e) {
  var that = e.data.that;

  that.helpers.hideSideMenu();
  that.helpers.hideOverlay();
};

module.exports = SideMenu;
