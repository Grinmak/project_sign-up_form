const pass = document.getElementById('pass');
const passCheck = document. getElementById('confirmPass');
console.log(passCheck);

let password ='';
let confirmPassword = '';

pass.addEventListener('input', customErrorMesagge);
function customErrorMesagge (event){
    classTogle();
    password += event.data;
    console.log(event);
    if(pass.validity.patternMismatch) {
        pass.setCustomValidity('Password should contain at least one upper and lower case letters and one digit');
    } else pass.setCustomValidity('');
};
/*     if(pass.validity.tooShort) {
        pass.setCustomValidity('Minimal length is 8 characters')
    } else pass.setCustomValidity(''); */


passCheck.addEventListener('input', passConfirm);
function passConfirm (event) {
    console.log(event.data);
}

function classTogle () {
    if(pass.validity.valid) {
       /*  pass.classList.toggle('success'); */
       document.getElementById('pass').className = 'success';
     }
}