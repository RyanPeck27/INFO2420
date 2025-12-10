

function preload(src){
  const img = new Image();
  img.src = src;
}

function initPage(){
  
  const toPreload = [
    'Images/print2.jpg',
    'Images/logo2.jpg',
    'Images/HamsterLg.jpg',
    'Images/Horse1Lg.jpg',
    'Images/HuntingDogsLg.jpg',
    'Images/KidsDogLg.jpg'
  ];
  toPreload.forEach(preload);


  const thumbs = document.querySelectorAll('#thumbs img');
  const display = document.getElementById('display');
  const title = document.getElementById('imageTitle');

  thumbs.forEach(t => {
   
    t.addEventListener('mouseover', () => {
      const large = t.dataset.large || t.getAttribute('data-large');
      const txt = t.dataset.title || t.getAttribute('data-title') || '';
      if(large){
        display.src = large;
        title.textContent = txt;
      }
    });
   
    t.addEventListener('click', () => {
      const large = t.dataset.large || t.getAttribute('data-large');
      const txt = t.dataset.title || t.getAttribute('data-title') || '';
      if(large){
        display.src = large;
        title.textContent = txt;
      }
    });
  });

 
  const logo = document.getElementById('logo');
  if(logo){
    logo.addEventListener('mouseover', () => { logo.src = 'Images/banner6.jpg'; });
    logo.addEventListener('mouseout', ()  => { logo.src = 'Images/blaqqcat.jpg'; });
  }
}
