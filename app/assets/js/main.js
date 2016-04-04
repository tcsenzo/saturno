(function() {
  var menuToggle = document.querySelector('.menu-toggle'),
      sideMenu = document.querySelector('.side-menu'),
      closeSideMenu = document.querySelector('.side-menu .close'),
      pageContainer = document.querySelector('.page-container');

  menuToggle.addEventListener('click', function() {
    sideMenu.style.left = 0;
  });

  closeSideMenu.addEventListener('click', function() {
    sideMenu.style.left = '-310px';
  });
}())
