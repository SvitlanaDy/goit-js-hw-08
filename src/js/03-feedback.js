
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const email = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// fillForm();
fillTextField();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',throttle(onFormInput, 500));

function onFormSubmit(event) {
    event.preventDefault();
    // console.log('Відправляємо форму');
    // event.currentTarget.reset();
    // localStorage.removeItem(STORAGE_KEY);
    // console.log(formData);
    if (email.value === "" || textarea.value === "") {
        return alert("Please fill in all the fields!");
      }
        else {

            console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
   
            event.target.reset()
           
            localStorage.removeItem(STORAGE_KEY)
        }
}

function onFormInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(evt.target.value);
}



function fillTextField(){
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage){
        form.message.value = formData.message || '';
        form.email.value = formData.email || '';  
    }
}

