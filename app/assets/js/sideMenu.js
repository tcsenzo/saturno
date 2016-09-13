var Helpers = require('./helpers');

function SideMenu() {
  this.helpers = new Helpers();
  this.binds();
}

SideMenu.prototype.binds = function() {
  var that = this;

  $('.menu-toggle').on('click', {that: this}, this.onOpenMenu);
  $('.side-menu .close-side-menu, .overlay').on('click', {that: this}, this.onCloseMenu);
  $(document).on('keyup', {that: this}, this.onKeyup);
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

SideMenu.prototype.onKeyup = function (e) {
  var that = e.data.that;

  if (e.keyCode === 27) {
    that.onCloseMenu(e);
  }
};

module.exports = SideMenu;
