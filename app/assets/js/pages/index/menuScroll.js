function MenuScroll() {
  this.$header = $('.header');
  this.binds();
};

MenuScroll.prototype.binds = function() {
  $(document).on('scroll', {that: this}, this.onPageScroll);
};

MenuScroll.prototype.onPageScroll = function(e) {
  var $window = $(window),
      that = e.data.that;

  if($window.scrollTop() >= 50) {
    that.$header.addClass(`background`);
    that.$header.find('.background-animation').css({"height": "100%"})
  }
  else {
    if($window.scrollTop() <= 50) {
      that.$header.removeClass(`background`);
      that.$header.find('.background-animation').css({"height": "0"})
    }
  }
};

module.exports = MenuScroll;
