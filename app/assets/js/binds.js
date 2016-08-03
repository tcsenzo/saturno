// import Senzo from './senzo/senzo';
// import MenuScroll from './menuScroll';
//
// /* global $ */
// export default class Binds {
//   constructor() {
//     this.helpers = new Senzo().helpers;
//     this.bindScroll();
//     this.bindClicks();
//   }
//   bindClicks() {
//     let that = this;
//     $(`.menu-toggle`).on(`click`, () => {
//       that.helpers.showSideMenu();
//       that.helpers.showOverlay();
//     });
//
//     $('.side-menu .close').on('click', () => {
//       that.helpers.hideSideMenu();
//       that.helpers.hideOverlay();
//     });
//   }
//   bindScroll() {
//     let menuScroll = new MenuScroll();
//     $(window).on('scroll', {'that': menuScroll}, menuScroll.bindScroll);
//   }
// }
