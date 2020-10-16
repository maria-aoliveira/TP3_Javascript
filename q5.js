let divQ5 = document.getElementById("q5"); 

//título da questão
let tituloQ5 = document.createElement("h6");
let txtQ5 = document.createTextNode("Questão 05");

//adição do titulo aos pais
tituloQ5.appendChild(txtQ5);
divQ5.appendChild(tituloQ5).style.textAlign = "center";

let divInput1Q5 = document.createElement("div");
let label1Q5 = document.createElement("label");
label1Q5.innerText = "Lado A:";
let input1Q5 = document.createElement("input");
input1Q5.id = "lado1";
input1Q5.type = "number"
input1Q5.style.margin = "5px";


divInput1Q5.appendChild(label1Q5);
divInput1Q5.appendChild(input1Q5);
divQ5.appendChild(divInput1Q5).style.textAlign = "center";


let divInput2Q5 = document.createElement("div");
let label2Q5 = document.createElement("label");
label2Q5.innerText = "Lado B:";
let input2Q5 = document.createElement("input");
input2Q5.id = "lado2";
input2Q5.type = "number"
input2Q5.style.margin = "5px";

divInput2Q5.appendChild(label2Q5);
divInput2Q5.appendChild(input2Q5);
divQ5.appendChild(divInput2Q5).style.textAlign = "center";;


let divInput3Q5 = document.createElement("div");
let label3Q5 = document.createElement("label");
let input3Q5 = document.createElement("input");
label3Q5.innerText = "Lado C:";
input3Q5.id = "lado3";
input3Q5.type = "number"
input3Q5.style.margin = "5px";


divInput3Q5.appendChild(label3Q5);
divInput3Q5.appendChild(input3Q5);
divQ5.appendChild(divInput3Q5).style.textAlign = "center";

//botão de calcular
let divBtnQ5 = document.createElement("div");
let btnCalcularQ5 = document.createElement("button");
btnCalcularQ5.textContent = "Calcular";
btnCalcularQ5.style.margin = "10px";
btnCalcularQ5.className = "btn btn-primary my-2"
btnCalcularQ5.addEventListener("click",respostaQ5);

//adição do botão aos pais
divBtnQ5.appendChild(btnCalcularQ5);
divQ5.appendChild(divBtnQ5).style.textAlign = "center";

function tipoTriangulo(a,b,c){
    return (a === b && b === c) && 'equilátero' ||
    (a === b || a === c || b === c) && 'isósceles' ||
    'escaleno';  
}

function respostaQ5(){
    let a = document.getElementById("lado1").value;
    let b = document.getElementById("lado2").value;
    let c = document.getElementById("lado3").value;
    let resultadoQ5 = tipoTriangulo(a,b,c);
    if (a == "" || b == "" || c ==""){
        alert("Por favor, preencha os campos")
        console.log(resultadoQ5)
    }else{
        let divResultadoQ5 = document.createElement("div");
        divResultadoQ5.id = "resultadoQ5"
        divQ5.appendChild(divResultadoQ5);
        document.getElementById("resultadoQ5").innerText = `O triângulo com os lados ${a}, ${b} e ${c} é ${resultadoQ5}`;
    }
 
}