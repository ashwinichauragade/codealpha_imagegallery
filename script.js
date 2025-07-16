const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const filterButtons = document.querySelectorAll('.filters button');

let currentIndex = 0;
let currentImages = Array.from(galleryItems);

// Open lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
});

// Filter logic
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    currentImages = [];

    galleryItems.forEach(img => {
      if (category === 'all' || img.dataset.category === category) {
        img.style.display = 'block';
        currentImages.push(img);
      } else {
        img.style.display = 'none';
      }
    });
  });
});
