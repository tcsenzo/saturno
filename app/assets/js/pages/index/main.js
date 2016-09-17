var Main = require('../../main'),
    MenuScroll = require('./menuScroll'),
    Slider = require('./slider');

function Index() {
  $(document).ready(function() {
    new MenuScroll();
    new Slider();
  });
}

new Index();
