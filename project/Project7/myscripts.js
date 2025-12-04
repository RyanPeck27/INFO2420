// myscripts.js -- external JavaScript for Project7 Home page

function preload(src){
  const img = new Image();
  img.src = src;
}

function initPage(){
  // Preload common images (update paths to match your Images folder)
  const toPreload = [
    'Images/print2.jpg',
    'Images/logo2.jpg',
    'Images/HamsterLg.jpg',
    'Images/Horse1Lg.jpg',
    'Images/HuntingDogsLg.jpg',
    'Images/KidsDogLg.jpg'
  ];
  toPreload.forEach(preload);

  // Hook up thumbnail hover/click behavior
  const thumbs = document.querySelectorAll('#thumbs img');
  const display = document.getElementById('display');
  const title = document.getElementById('imageTitle');

  thumbs.forEach(t => {
    // onmouseover behavior (image swap)
    t.addEventListener('mouseover', () => {
      const large = t.dataset.large || t.getAttribute('data-large');
      const txt = t.dataset.title || t.getAttribute('data-title') || '';
      if(large){
        display.src = large;
        title.textContent = txt;
      }
    });
    // add click to make accessible on keyboard/touch
    t.addEventListener('click', () => {
      const large = t.dataset.large || t.getAttribute('data-large');
      const txt = t.dataset.title || t.getAttribute('data-title') || '';
      if(large){
        display.src = large;
        title.textContent = txt;
      }
    });
  });

  // Logo rollover (example: swap between two images)
  const logo = document.getElementById('logo');
  if(logo){
    logo.addEventListener('mouseover', () => { logo.src = 'Images/banner6.jpg'; });
    logo.addEventListener('mouseout', ()  => { logo.src = 'Images/blaqqcat.jpg'; });
  }
}
