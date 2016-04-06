export default class MenuScroll {
    constructor() {
        this.lastScrollTop = 0;
    }
    bindScroll(e) {
        let that = e.data.that;
        that.getScrollDirection();
    }
    
    getScrollDirection() {
        let scrollTop = $(window).scrollTop(),
            scrollDirection = scrollTop > this.lastScrollTop ? 'down' : 'up';
            
        this.lastScrollTop = scrollTop;
        return scrollDirection;
    }
}