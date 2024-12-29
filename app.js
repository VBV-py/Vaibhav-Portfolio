
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

       
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    });
});
//
const arrowButton = document.getElementById('arrbtn');

window.addEventListener('scroll', () => {
    if (window.scrollY >1000) {
        document.querySelector('.Arrow').style.display = 'block';
    } else {
        document.querySelector('.Arrow').style.display = 'none';
    }
});

arrowButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


window.addEventListener('scroll', () => {
    document.querySelectorAll('.leftsec').forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        
        if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
            section.classList.add('cheering');
        } else {
            section.classList.remove('cheering');
        }
    });
});

window.onload =async ()=> {
    window.scrollTo(0, 0);
  };
  window.addEventListener('load', function() {
    window.scrollTo(0, 0);
  });
  

  document.addEventListener("DOMContentLoaded", function() {

    VANTA.BIRDS({
      el: "body",  
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color1: 0xff0000,  // Bird color
      color2: 0xd1ff,  // Secondary color
      birdSize: 0.5,     // Size of the birds
      quantity: 4  ,      // Number of birds
      wingSpan:30,
    speedLimit:5,
    separation:20,
    alignment:20,
    cohesion:20
    });
  });
  