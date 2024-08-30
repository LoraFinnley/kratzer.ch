// masonry.js

// Initialisiere Masonry nach dem Laden des DOM
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid, {
    // Optionen für Masonry
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
    gutter: 20
  });
});
