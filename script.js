const pass = document.getElementById('pass');
const passCheck = document. getElementById('confirmPass');
const error = document.querySelector('#pass + span.errorMessage');

let password ='';
let confirmPassword = '';

pass.addEventListener('input', customErrorMesagge);
pass.addEventListener('keydown', passEdit);
passCheck.addEventListener('input', passConfirm);
passCheck.addEventListener('keydown', passEdit);

form.addEventListener('submit', preventSubmit);

function customErrorMesagge (event){
    errorMessage();
    classTogle();
    if(event.data !== null){
        password += event.data;
    };
    if(pass.validity.patternMismatch) {
        pass.setCustomValidity('Password should contain at least one upper and lower case letters and one digit');
    } else pass.setCustomValidity('');
    console.log(password);
};

function classTogle () {
    if(pass.validity.valid) {
       document.getElementById('pass').className = 'success';
     };
};

function passConfirm (event) {

    if(event.data !== null){
        confirmPassword += event.data;
    };
    if( password !== confirmPassword){ 
        if(passCheck.validity.patternMismatch){
            passCheck.setCustomValidity('Passwords doesn\'t match');
        };

    };

    if(password === confirmPassword){
        document.getElementById('confirmPass').className = 'success';
    }; 
    console.log(confirmPassword);
};




function passEdit (event) {

    if(event.key === 'Backspace'){
        if(event.target.id === 'confirmPass'){
            confirmPassword = confirmPassword.substring(0, confirmPassword.length-1);
        };
        if(event.target.id === 'pass'){
            password = password.substring(0, password.length-1);
        }
    }
    console.log(confirmPassword);
}; 

function preventSubmit (event) {
    if(passCheck.className !== 'success') {
        passCheck.setCustomValidity('Passwords doesn\'t match');
        event.preventDefault();
    };
}

function errorMessage () {
    if(!pass.validity.valid){
        error.textContent = 'at least 8 characters, one digit, one upper case letter';
    }else error.textContent = '';
        
    
};