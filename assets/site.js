(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; }
  });
})();
