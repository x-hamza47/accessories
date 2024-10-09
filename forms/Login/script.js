const form = document.querySelector('form'),
user_field = form.querySelector('.user-field'),
user_inp = form.querySelector('.user-field input');

const  usr_err = form.querySelector('.username-error .error-text'),
pass_err = form.querySelector('.pass-error .error-text');

const checkUser = () => {

    const user_pattern = 'hamza';
    if (!user_inp.value.match(user_pattern)) {
        user_field.classList.add('invalid');
        usr_err.innerText = "Username not found";
    } else {
        user_field.classList.remove('invalid');
    }
    
    user_inp.addEventListener("keyup", checkUser);
    
};

const pass_field = form.querySelector('.pass-field'),
pass_inp = form.querySelector('.pass-field input');

const checkPass = () => {

    const user_pass = "hamza123";

    if (!pass_inp.value.match(user_pass)) {
        pass_field.classList.add('invalid');
    } else {
        pass_field.classList.remove('invalid');
    }

    pass_inp.addEventListener("change",checkPass);


}


form.addEventListener("submit",(e) => {
    e.preventDefault();
    checkUser();
    checkPass();
    
    if (user_inp.value === '') {
        usr_err.innerText = "Username Required";
        return false;
    }
    if(!user_field.classList.contains("invalid") && 
    !pass_field.classList.contains("invalid")){
        location.href = "https://chat-app-hamxi.000webhostapp.com/znm/";
    }
});