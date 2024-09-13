let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let submitBtn = document.getElementById("submit_btn");
let alertContainer = document.getElementById("alertContainer");
let contactForm = document.getElementById('contact_form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let messageValue = messageInput.value.trim();

    if (nameValue && emailValue && messageValue) {
        let showAlert = document.createElement('div');
        showAlert.classList.add('alert_success');
        showAlert.textContent = `Thank you, ${nameValue}! Your message has been received.`;

        alertContainer.appendChild(showAlert);

        setTimeout(() => {
            showAlert.style.opacity = '0';
            setTimeout(() => {
                alertContainer.removeChild(showAlert);
            }, 500); 
        }, 2500); 
    }
    
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});