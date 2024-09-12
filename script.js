let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit_btn = document.getElementById("submit_btn");
let alertContainer = document.getElementById("alertContainer");
let contact_form = document.getElementById('contact_form'); 

contact_form.addEventListener('submit', function(event) {
    event.preventDefault();

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let messageValue = name.value.trim();

    if (nameValue && emailValue && messageValue) {
        // Create the alert div
        let showAlert = document.createElement('div');
        showAlert.classList.add('alert_success');
        showAlert.textContent = `Thank you, ${nameValue}! Your message has been received.`;

        // Append the alert to the container
        alertContainer.appendChild(showAlert);

        // Remove the alert after 3 seconds
        setTimeout(() => {
            showAlert.classList.add('fade-out');
            setTimeout(() => {
                alertContainer.removeChild(showAlert);
            }, 500); // Matches the CSS transition duration
        }, 3000); // 3 seconds delay
    }
    
    name.value = '';
    email.value = '';
    message.value = '';
});
