function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    });
  });

  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
  
    let formValid = true;
  
    
    const formFields = document.querySelectorAll('#contact input[required], #contact textarea[required]');
  
    formFields.forEach(field => {
      if (!field.value.trim()) {
        formValid = false;
        
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Merci de remplir ce champ';
  
        field.insertAdjacentElement('afterend', errorMessage);
      }
    });
  
    
    if (formValid) {
      alert("Réservation effectuée avec succès!");
    }
  });
 