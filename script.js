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
        alert(`Thank you, ${nameValue}. We've received your message.`);
    }

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});