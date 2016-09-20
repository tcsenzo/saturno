function SearchHeader() {
  this.binds();
  this.$header = $('.header');
}

SearchHeader.prototype.binds = function() {
  var that = this;

  $('.header .search-btn a').on('click', function(e) { e.preventDefault() });
  $('.header .search-btn').on('click', {that: this}, this.showSearchForm);

  $('.header .search-header .search-input').on('blur', {that: this}, this.hideSearchForm);
};

SearchHeader.prototype.showSearchForm = function (e) {
  var that = e.data.that;

  that.$header.addClass('background');
  that.$header.find('.background-animation').css({'height': '100%'})

  that.$header.find('.default-header').hide();
  that.$header.find('.search-header').fadeIn();

  that.$header.find('.search-input').focus();
};

SearchHeader.prototype.hideSearchForm = function (e) {
  var that = e.data.that;

  that.$header.find('.search-header').hide();
  that.$header.find('.default-header').fadeIn();

  if($(window).scrollTop() <= 50) {
    that.$header.removeClass('background');
    that.$header.find('.background-animation').css({'height': '0'})
  }
};

module.exports = SearchHeader;
