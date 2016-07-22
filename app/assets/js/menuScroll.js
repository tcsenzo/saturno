export default class MenuScroll {
  constructor() {
    this.$header = $(`.header`);
  }
  bindScroll(e) {
    let $window = $(window),
        that = e.data.that;

    if($window.scrollTop() >= 150) {
      that.$header.addClass(`background`);
      that.$header.find('.background-animation').css({"height": "100%"})
    }
    else {
      if($window.scrollTop() <= 50) {
        that.$header.removeClass(`background`);
        that.$header.find('.background-animation').css({"height": "0"})
      }
    }
  }
}
