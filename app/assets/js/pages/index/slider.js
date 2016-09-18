require('bxslider/dist/jquery.bxslider.min.js');

function Slider() {
  $('.events-list-highlights, .events-list-recommended, .events-list-latest').bxSlider({
    'pager': false,
    'slideWidth': 255,
    'minSlides': 1,
    'maxSlides': 4,
    'slideMargin': 20,
    'wrapperClass': 'slider-container',
    'shrinkItems': true,
    'nextText': '',
    'prevText': ''
  });
}

module.exports = Slider;
