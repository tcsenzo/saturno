window.$ = window.jQuery = require('jquery');
require('jquery-mask-plugin');
require('jquery-form-validator');

var SideMenu = require('./sideMenu');
var SearchHeader = require('./searchHeader');
var FormValidator = require('./formValidator');

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
