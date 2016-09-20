window.$ = window.jQuery = require('jquery');
require('jquery-mask-plugin');

var SideMenu = require('./sideMenu');
var SearchHeader = require('./searchHeader');

function Main(){
  this.binds();
}

Main.prototype.binds = function () {
  $(document).ready(this.onDocumentReady);
};

Main.prototype.onDocumentReady = function () {
  new SideMenu();
  new SearchHeader();
};

new Main();
