const navigationToggle = document.getElementById('navigation-toggle');

navigationToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.toggle('active');
});

document.addEventListener('click', function() {
  navigationToggle.classList.remove('active');
});