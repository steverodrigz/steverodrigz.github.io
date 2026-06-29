(function() {
  var nav = document.getElementById('nav');
  if (!nav) return;
  var burger = document.getElementById('nav-burger');
  var mobile = document.getElementById('nav-mobile');
  var mobileLinks = mobile ? mobile.querySelectorAll('a') : [];

  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  });

  if (burger && mobile) {
    burger.addEventListener('click', function() {
      mobile.classList.toggle('is-open');
      document.body.style.overflow = mobile.classList.contains('is-open') ? 'hidden' : '';
    });

    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobile.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }
})();
