const signUpBtn = document.getElementById("sign-up-btn");
const dismissMessageBtn = document.getElementById("dismiss-message-btn");
const emailMessageValidation = document.getElementById("email-signup-message-validation");
const card = document.getElementById("card");
const cardSuccess = document.getElementById("card-success");
const emailSuccess = document.getElementById("email-success");
const signUpEmail = document.getElementById("sign-up-email");

signUpBtn.addEventListener("click",(event)=>{
    let email = signUpEmail.value;
   validateMail(email);
});

dismissMessageBtn.addEventListener("click",()=>{
    card.style.display="flex";
    cardSuccess.style.display="none";
    signUpEmail.value="";
    
})

const validateMail = (email)=>{
    console.log(email)
    let mailRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    if(email.match(mailRegex)){
        emailMessageValidation.style.display="none";
        card.style.display="none";
        cardSuccess.style.display="flex";
        emailSuccess.innerText=email;
    }else{
       emailMessageValidation.style.display="block";
    }
}