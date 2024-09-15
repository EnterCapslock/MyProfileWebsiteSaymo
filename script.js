let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let submitBtn = document.getElementById("btnSubmit");
let alertContainer = document.getElementById("alertContainer");
let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let messageValue = messageInput.value.trim();

    if (nameValue && emailValue && messageValue) {
        alert(`Thank you! Your message has been sent.`);
    }

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});