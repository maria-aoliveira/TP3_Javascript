let divQ6 = document.getElementById("q6"); 

let tituloQ6 = document.createElement("h6");
let txtQ6 = document.createTextNode("Questão 06");
tituloQ6.appendChild(txtQ6);
divQ6.appendChild(tituloQ6).style.textAlign = "center";

let divLogin = document.createElement("div");
let labelLogin = document.createElement("label");
labelLogin.innerText = "Login:"
let inputLogin = document.createElement("input");
inputLogin.style.margin = "5px";
inputLogin.id = "login"

divLogin.appendChild(labelLogin);
divLogin.appendChild(inputLogin);
divQ6.appendChild(divLogin).style.textAlign = "center";

let divPass = document.createElement("div");
let labelPass = document.createElement("label");
labelPass.innerText = "Senha:"
labelPass.style.margin = "3px";
let inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.id = "senha"

divPass.appendChild(labelPass);
divPass.appendChild(inputPass);
divQ6.appendChild(divPass).style.textAlign = "center";;

let divBtns = document.createElement("div");
let btnEntrar = document.createElement("button");
btnEntrar.className = "btn btn-primary my-2"
btnEntrar.innerText = "Entrar";
btnEntrar.style.margin = "20px";
btnEntrar.addEventListener("click", check);

let btnCadastrar = document.createElement("button");
btnCadastrar.className = "btn btn-primary my-2"
btnCadastrar.innerText = "Cadastrar";
btnCadastrar.addEventListener("click", store);

divBtns.appendChild(btnEntrar);
divBtns.appendChild(btnCadastrar);
divQ6.appendChild(divBtns).style.textAlign = "center";

let divMensagem = document.createElement("div");
divMensagem.style.textAlign = "center";
divMensagem.id = "mensagem";
divQ6.appendChild(divMensagem);

let divLogout = document.createElement("div");
let btnLogout = document.createElement("button");
btnLogout.className ="btn btn-outline-danger";
btnLogout.style.marginBottom = "10px";
btnLogout.style.marginInlineStart = "120px";
btnLogout.innerText = "Logout"; 
btnLogout.id = "Logout"; 

divLogout.appendChild(btnLogout);
divQ6.appendChild(divLogout);
divLogout.style.visibility = "hidden";


function store(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login.length == 0){
        alert("Informe seu e-mail");

    }else if(senha.length == 0){
        alert("Informe sua senha");
    }else{
        // localStorage.setItem('login', login.value);
        // localStorage.setItem('senha', senha.value);
        let users = []
        if(window.localStorage.getItem("users")){
            users = JSON.parse(window.localStorage.getItem("users"))
        }
        users.push({login: login, senha: senha})
        window.localStorage.setItem("users", JSON.stringify(users));

        // alert("Conta criada!");    
        console.log(users);
        document.getElementById("mensagem").innerText = "Conta Criada!"

    }

    document.getElementById("login").value = ""
    document.getElementById("senha").value = ""


}

function check(){

    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

	let users = []
	if(window.localStorage.getItem("users")){
		users = JSON.parse(window.localStorage.getItem("users"));
	}
	for(let i = 0; i < users.length; i++) {
		if(users[i].login == login && users[i].senha == senha){
            window.localStorage.setItem("login", document.getElementById('login').value);
            document.getElementById("mensagem").innerText= `Bem-vindo, ${inputLogin.value}!`;
            divLogout.style.visibility = "visible";
            let logout = document.getElementById("Logout")
            logout.addEventListener("click", deslogar);
            break;
        }
	}
    // let getLogin = localStorage.getItem("login");
    // let getSenha = localStorage.getItem("senha");
    // if(login.value == getLogin && senha.value == getSenha){
    //     alert("Você está logado");
    //     document.getElementById("mensagem").innerText= `Bem-vindo, ${inputLogin.value}!`       

    // }else{
    //     alert('Erro no login');
    // }
    
    document.getElementById("login").value = ""
    document.getElementById("senha").value = ""

}


function deslogar(){
    window.localStorage.removeItem("login");
    //document.getElementById("mensagem").innerText= `Adeus!`;
    divLogout.style.visibility = "hidden";
    document.getElementById("mensagem").innerText= "";



}








