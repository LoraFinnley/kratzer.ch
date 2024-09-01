// masonry.js

function initMasonry() {
  var grid = document.querySelector('.grid');
  if (grid) {
    // Nutze imagesLoaded, um sicherzustellen, dass alle Bilder geladen sind
    imagesLoaded(grid, function() {
      // Initialisiere Masonry erst nach dem Laden der Bilder
      new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 20
      });
    });
  }
}

// Initialisiere Masonry nach dem Laden des DOM
document.addEventListener('DOMContentLoaded', function () {
  initMasonry();
});



// Initialize the lightbox
let currentImageIndex = 0;
const images = document.querySelectorAll('.grid-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Function to open the lightbox
function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImage.src = src;
  currentImageIndex = [...images].findIndex(img => img.src.includes(src));
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Function to change the image in the lightbox
function changeImage(direction) {
  currentImageIndex += direction;
  
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  lightboxImage.src = images[currentImageIndex].src;
}

// Event listeners for keyboard navigation
document.addEventListener('keydown', function(event) {
  if (lightbox.style.display === 'flex') {
    if (event.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (event.key === 'ArrowRight') {
      changeImage(1);
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  }
});

// Add event listener to close lightbox when clicking on the overlay
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) { // Check if the click was on the overlay (lightbox itself)
    closeLightbox();
  }
});

// Prevent click event propagation when clicking on the image itself
lightboxImage.addEventListener('click', function(event) {
  event.stopPropagation();
});