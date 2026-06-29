(function() {
  var track = document.getElementById('testimonials-track');
  if (!track) return;

  var slides = track.querySelectorAll('.testimonial-slide');
  var dotsContainer = document.getElementById('carousel-dots');
  var prevBtn = document.getElementById('carousel-prev');
  var nextBtn = document.getElementById('carousel-next');
  if (!dotsContainer) return;

  var current = 0;
  var perPage = window.innerWidth > 900 ? 3 : 1;
  var total = Math.ceil(slides.length / perPage);

  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('data-index', i);
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dotsContainer.appendChild(dot);
  }

  function show(index) {
    current = (index + total) % total;
    var start = current * perPage;
    slides.forEach(function(slide, i) {
      slide.style.display = (i >= start && i < start + perPage) ? '' : 'none';
    });
    dotsContainer.querySelectorAll('.dot').forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  show(0);

  prevBtn && prevBtn.addEventListener('click', function() { show(current - 1); });
  nextBtn && nextBtn.addEventListener('click', function() { show(current + 1); });
  dotsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dot')) show(parseInt(e.target.getAttribute('data-index')));
  });
})();
