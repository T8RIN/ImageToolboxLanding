document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('nav');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
  });

  document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
});
