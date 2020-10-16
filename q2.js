let divQ2 = document.getElementById("q2"); 

//título da questão
let tituloQ2 = document.createElement("h6");
let txtQ2 = document.createTextNode("Questão 02");

//adição do titulo aos pais
tituloQ2.appendChild(txtQ2);
divQ2.appendChild(tituloQ2).style.textAlign = "center";

//input
let divInputQ2 = document.createElement("div");
let labelQ2 = document.createElement("label");
labelQ2.textContent = "Fatorial:"
let inputQ2 = document.createElement("input");
inputQ2.id = "inputFatorial"
inputQ2.type = "number";
inputQ2.style.margin = "5px";

//adição label e input aos pais
divInputQ2.appendChild(labelQ2);
divInputQ2.appendChild(inputQ2);
divQ2.appendChild(divInputQ2).style.textAlign = "center";

let divResultadoQ2 = document.createElement("div");
divResultadoQ2.id = "resultadoQ2";
divQ2.appendChild(divResultadoQ2).style.textAlign = "center";

//botão de calcular
let divBtnQ2 = document.createElement("div");
let btnCalcularQ2 = document.createElement("button");
btnCalcularQ2.textContent = "Calcular";
btnCalcularQ2.className = "btn btn-primary my-2"
btnCalcularQ2.addEventListener("click", calcularResultado);

//adição do botão aos pais
divBtnQ2.appendChild(btnCalcularQ2);
divQ2.appendChild(divBtnQ2).style.textAlign = "center";

//resultado final
function calcularResultado(){

    let  abertura= new Date().getTime();
    console.log(abertura)

    let num = document.getElementById("inputFatorial").value; 

    if(num == null || num == ""){
        alert("Por favor, preencha o campo!")
    }else{
        let resultado=1;
    for(let count=1 ; count<=num ; count++){
        resultado *= count;
    }

    let conclusao = new Date().getTime();
    console.log(conclusao);

    document.getElementById("resultadoQ2").innerText = `O fatorial de ${num}! é = ${resultado} (tempo de processamento para o cálculo: ${conclusao - abertura} ms)`; 

    console.log(conclusao - abertura);
    } 

}


