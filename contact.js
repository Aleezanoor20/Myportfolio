const form = document.querySelector("#contact-form");


const fields = [

    { id: "name",
      message: "Please enter your name." },

    { id: "email",
      message: "Please enter a valid email address." },

    { id: "message", 
      message: "Please write at least 10 characters." }

]; 


function validateField(field) {

    const input = document.querySelector(`#${field.id}`);
    const error = document.querySelector(`#${field.id}-error`);
    const valid = input.checkValidity();

    input.setAttribute("aria-invalid", String(!valid)); 
    error.textContent = valid ? "" : field.message;
    return valid;

}

form.addEventListener("submit", (event) => {
event.preventDefault();

const allValid = fields.map(validateField).every(Boolean);
const status = document.querySelector("#form-status");

if (!allValid) {
    status.textContent = "Please correct the errors in the form.";
    return;
}

status.textContent = "Message sent! Thank you.";
form.reset();
});
