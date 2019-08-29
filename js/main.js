
// SLIDER CONTROLLER
const PrevButton = document.querySelector('#prev');
const NextButton = document.querySelector('#next');

const images = Array.from(document.querySelectorAll('.big__image'));
const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));

let state = {
    photo: 0
};

function send(event) {
    const activeElements = document.querySelectorAll('[data-active]');

    Array.from(activeElements).forEach(el => el.removeAttribute('data-active'));

    switch (event) {
        case 'PREV':
          state.photo--;
          // Math.max(state.photo - 1, 0);
          break;
        case 'NEXT':
          state.photo++;
          // Math.min(state.photo + 1, elImages.length - 1);
          break;
        default:
          state.photo = +event;
          break;
      }

    let len = images.length;
    // loop and set the state
    state.photo = Math.max(0, Math.min( state.photo, len - 1) );
 
    Array.from(document.querySelectorAll(`[data-key="${state.photo}"]`))
    .forEach( el => {
    el.setAttribute('data-active', true);
  });

};

thumbnails.forEach( thumb => { 
    thumb.addEventListener('click', () => {
      send(thumb.dataset.key);
    });
  });
  
  PrevButton.addEventListener('click', () => {
    send('PREV');
  });
  
  NextButton.addEventListener('click', () => {
    send('NEXT');
  });
  
  send(0);


  // NAV CONTROLLER 

  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');
    nav.classList.remove('nav--active');

        // toggle navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');
        nav.style.animation = `navSlide 1s ease forwards`;

            // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .6}s`; // adds 1.5s delay
            }
        });

        // burger animation
        burger.classList.toggle('pressed');
    });


}

navSlide();