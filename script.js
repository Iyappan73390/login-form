const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')



form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkinput();
})

function checkinput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'email is not valid');
    }else{
        setSuccessFor(email);

    }

    if(passwordValue === ''){
        setErrorFor(password, 'password cannot be blank');
    }else{
        setSuccessFor(password);
    }
}

function setErrorFor(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText = message;
    formcontrol.className = 'form-control error'
}

function setSuccessFor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'
}

function isEmail(email){
    return /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
}