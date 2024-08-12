document.getElementById('reveal-email').addEventListener('click', function() {
    var emailElement = document.getElementById('email');
    
    if (emailElement.style.display === 'none') {
        emailElement.style.display = 'block'; 
        setTimeout(function() {
            emailElement.classList.add('show'); 
        }, 10); 
    } else {
        emailElement.classList.remove('show'); 
        setTimeout(function() {
            emailElement.style.display = 'none'; 
        }, 500); 
    }
});


// Function to add animation class when section is in view
function animateOnScroll() {
    const section = document.getElementById('home');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    if (sectionPosition < screenPosition) {
      section.querySelector('.fade-text').classList.add('fade-text-animate');
    }
  }
  
  window.addEventListener('scroll', animateOnScroll);
  