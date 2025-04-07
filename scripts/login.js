const enterButton = document.getElementById("enter-button");
const messageField = document.getElementById("message-field");

enterButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  validateData(email,password)
});
function validateData(email,password){
    email=email.trim()
    password=password.trim()
    if(email.length===0 || password.length===0){
        showsMessage("Todos os campos são obrigatórios.")
    }else if(password.length<8){
        showsMessage("Sua senha deve ter no minimo 8 caracteres válidos.")
    }else if(!email.includes("@")||!email.includes(".")){
        showsMessage("E-mail inválido")
    }else{
        resetMessage()
        authenticateData(email,password)
    }
}

function authenticateData(email,password){
    let isAuthenticated = false
    fetch("../users.json")
    .then((response)=> response.json())
    .then((response)=>{
        users=response.users
        for (let i = 0; i < users.length; i++) {
            if(users[i].email === email && users[i].password === password){
                showsMessage("Dados ok",true)
                isAuthenticated = true
                setTimeout(() => {
                    resetMessage()
                    window.location.href = "/views/home.html";
                  }, 3000);
                break
            }
        }
        if(isAuthenticated === false) showsMessage("E-mail ou senha inválidos.")
    })
    .catch((err)=>{
        resetMessage()
        alert("Erro ao autenticar usuário")
    })
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