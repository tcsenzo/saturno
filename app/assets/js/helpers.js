function Helpers() {
  this.$overlay = $('.overlay');
  this.$sideMenu = $('.side-menu');
}

Helpers.prototype.showOverlay = function() {
  this.$overlay.show();
}

Helpers.prototype.hideOverlay = function() {
  this.$overlay.hide();
}

Helpers.prototype.showSideMenu = function() {
  this.$sideMenu.css('left', 0);
}

Helpers.prototype.hideSideMenu = function() {
  this.$sideMenu.css('left', '-310px');
}

module.exports = Helpers;
