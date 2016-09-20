function MenuScroll() {
  this.$header = $('.header');
  this.binds();
};

MenuScroll.prototype.binds = function() {
  $(document).on('scroll', this.onPageScroll.bind(this));
  $(document).ready(this.onPageScroll.bind(this));
};

MenuScroll.prototype.onPageScroll = function(e) {
  var $window = $(window),
      that = this;

  if($window.scrollTop() >= 30) {
    if(!that.$header.hasClass('background')) {
      that.$header.addClass('background');
      that.$header.find('.background-animation').css({"height": "100%"})
    }
  }
  else {
    if($window.scrollTop() <= 50) {
      if(!that.$header.find('.search-header').is(':visible')) {
        that.$header.removeClass('background');
        that.$header.find('.background-animation').css({"height": "0"})
      }
    }
  }
};

module.exports = MenuScroll;
