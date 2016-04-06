export default class MenuScroll {
    constructor() {
        this.lastScrollTop = 0;
        this.$header = $(`.header`);
    }
    bindScroll(e) {
        let that = e.data.that;
        if ($(window).scrollTop() <= 60) {
          //that.$header.removeClass(`fixed`);
          that.$header.css({top: 0});
        }
        else if ($(this).scrollTop() > 60 && that.getScrollDirection() === `up`) {
          //that.$header.addClass(`fixed`);
          that.$header.css({top: $(window).scrollTop()});
        }
    }

    getScrollDirection() {
        let scrollTop = $(window).scrollTop(),
            scrollDirection = scrollTop > this.lastScrollTop ? `down` : `up`;

        this.lastScrollTop = scrollTop;
        return scrollDirection;
    }
}
