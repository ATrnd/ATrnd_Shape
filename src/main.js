document.addEventListener('DOMContentLoaded', () => {
  // Background image fade-in
  const bgContainer = document.getElementById('bg-container');
  const bgImagePath = './public/bg_0.1.jpg';
  const img = new Image();
  img.onload = () => {
    bgContainer.style.backgroundImage = `url(${bgImagePath})`;

    setTimeout(() => {
      bgContainer.classList.remove('opacity-0');
      bgContainer.classList.add('opacity-100');
    }, 50);
  };

  img.src = bgImagePath;

});


