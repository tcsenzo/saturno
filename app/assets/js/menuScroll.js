export default class MenuScroll {
  constructor() {
    this.$header = $(`.header`);
  }
  bindScroll(e) {
    let $window = $(window),
        that = e.data.that;

    if($window.scrollTop() >= 150) {
      that.$header.addClass(`background`);
    }
    else {
      if($window.scrollTop() <= 50) {
        that.$header.removeClass(`background`);
      }
    }
  }
}
