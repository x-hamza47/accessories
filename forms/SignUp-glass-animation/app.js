////  EMAIL VALIDATION  //////

const form = document.querySelector("form"),
    emailField = form.querySelector(".email-box"),
    emailInput = form.querySelector(".email");

function checkEmail(){
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!emailInput.value.match(emailPattern)) {
     emailField.classList.add("invalid");
    
}  else{
    emailField.classList.remove("invalid");
    }
    emailInput.addEventListener("keyup", checkEmail);
    
}

///////   PASSWORD VALIDATION   /////////

const passField = form.querySelector(".password-box"),
    passInput = passField.querySelector(".pass"),
    conPass = form.querySelector(".confirm-pass"),
    cpInput = conPass.querySelector(".confPass");

function createPass(){
 const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,14}$/ ;
 if (!passInput.value.match(passPattern)) {
    passField.classList.add("invalid");
} else {
     passField.classList.remove("invalid");
 }
 passInput.addEventListener("keyup", createPass);
}

////////   CONFIRM PASSWORD  ////////////

function confirmPass(){
    if(passInput.value !== cpInput.value || cpInput.value === ""){
        conPass.classList.add("invalid");
    } else{
        conPass.classList.remove("invalid");
    }
    cpInput.addEventListener("keyup", confirmPass);
}




/////  HIDE AND SHOW PASSWORD  //////
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcons) => {
    eyeIcons.addEventListener("click", () =>{
        const pInput = eyeIcons.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcons.classList.replace("bx-hide","bx-show");
            return (pInput.type = "text");
        }
        eyeIcons.classList.replace("bx-show","bx-hide");
        pInput.type = "password";
    });
});




////  Cancel form submit  /////
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();
   
    if (!emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !conPass.classList.contains("invalid")
    
    ) {
        location.href = form.getAttribute("action");

    }

});