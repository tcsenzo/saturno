(function() {
  var menuToggle = document.querySelector('.menu-toggle'),
      sideMenu = document.querySelector('.side-menu'),
      closeSideMenu = document.querySelector('.side-menu .close');

  menuToggle.addEventListener('click', function() {
    sideMenu.style.left = 0;
  });

  closeSideMenu.addEventListener('click', function() {
    sideMenu.style.left = '-32%';
  });
}())
