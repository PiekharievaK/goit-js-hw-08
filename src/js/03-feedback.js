import { throttle } from "lodash";

const form = document.querySelector(".feedback-form");
const mailField = form.querySelector(`[name="email"]`);
const messageField = form.querySelector(`[name="message"]`);

let formData = {};

form.addEventListener(`input`, throttle(saveInputData, 500));
form.addEventListener(`submit`, submitForm);
onLoadPageFieldData();



function saveInputData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

 
function submitForm(evt) {
    evt.preventDefault();
    console.log(formData);
    formData = {}; 
form.reset();
localStorage.removeItem("feedback-form-state");
}


function onLoadPageFieldData() {
    const itemFromLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (itemFromLocalStorage) {
        formData = itemFromLocalStorage;
        mailField.value = itemFromLocalStorage.email || '';
        messageField.value = itemFromLocalStorage.message || '';
     }
}


