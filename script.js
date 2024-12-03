//your JS code here. If required.
const check = document.querySelector('#check');
const submitButton = document.querySelector('#submit');

check.addEventListener('change', ()=>{
    submitButton.disabled = !check.checked;
});