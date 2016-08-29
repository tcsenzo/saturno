window.$ = require('jquery');
require('jquery-mask-plugin');

var SideMenu = require('./sideMenu');

function Main(){
  this.binds();
}

Main.prototype.binds = function () {
  $(document).on('ready', this.onDocumentReady);
};

Main.prototype.onDocumentReady = function (e) {
  new SideMenu();
};

new Main();
