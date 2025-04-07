const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");
const messageField = document.getElementById("message-field");
const registerButton = document.getElementById("register-button");

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  validateData(email, password,confirmPassword);
});
function validateData(email,password,confirmPassword){
    email=email.trim()
    password=password.trim()
    confirmPassword=confirmPassword.trim()
    if(email.length===0) showsMessage("O e-mail é obrigatório.")
    else if(password.length===0) showsMessage("A senha é obrigatória.")
    else if(password.length===0) showsMessage("A confirmação da senha é obrigatória.")
    else if(password!==confirmPassword) showsMessage("As senhas devem ser iguais")
    else if(password.length<8) showsMessage("Sua senha deve ter, no minimo, 8 caracteres válidos.")
    else if(!email.includes("@")||!email.includes(".")) showsMessage("E-mail inválido")
    else{
        resetMessage()
        validateEmailUniqueness(email,password)
    }
}


function validateEmailUniqueness(email,password){
    if(localStorage.getItem(email) !== null){
        showsMessage("Esse e-mail já existe em nosso sistema.")
    }else{
        fetch("../users.json")
        .then((response)=> response.json())
        .then((response)=>{
            users=response.users
            for (let i = 0; i < users.length; i++) {
                if(users[i].email === email){
                    showsMessage("Esse e-mail já existe em nosso sistema.")
                    return
                }
            }
            // Email é unico 
            registerUser(email,password)
        })
        .catch((err)=>{
            resetMessage()
            alert("Erro ao validar e-mail.")
        })
    }
}
function registerUser(email,password){
    showsMessage("Usuário registrado com sucesso.",true)
    setTimeout(() => {
        resetMessage()
        localStorage.setItem(email, password);
        window.location.href = "../index.html";
    }, 3000);
}


function showsMessage(message,isValid=false){
    if(isValid===true){
        messageField.style.color = "#00e749"
    }
    messageField.innerHTML = message
}
function resetMessage(){
    messageField.style.color = "#e70000"
    messageField.innerHTML = ""
}