// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add User</h1>`;
const form = document.getElementById("addForm");
function onSubmit(event) {
   event.preventDefault(); 
   const first= form.elements["f_name"].value;
   const last = form.elements["l_name"].value;
   window.alert(`hey ${first} ${last} you submitted a form`);
}
form.addEventListener('submit',onSubmit)