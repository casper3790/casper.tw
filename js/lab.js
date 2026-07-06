(function () {
  var page = document.querySelector('[data-lab-page]');
  if (!page) return;

  var revealItems = Array.prototype.slice.call(page.querySelectorAll('.lab-reveal'));

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12
  });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
})();
