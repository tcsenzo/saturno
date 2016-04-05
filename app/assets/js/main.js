(function() {
  var menuToggle = document.querySelector('.menu-toggle'),
      sideMenu = document.querySelector('.side-menu'),
      closeSideMenu = document.querySelector('.side-menu .close'),
      overlay = document.querySelector('.overlay');

  menuToggle.addEventListener('click', function() {
    sideMenu.style.left = 0;
    overlay.style.display = 'block';
  });

  closeSideMenu.addEventListener('click', function() {
    sideMenu.style.left = '-310px';
    overlay.style.display = 'none';
  });
}())
