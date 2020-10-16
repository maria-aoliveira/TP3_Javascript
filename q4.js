let divQ4 = document.getElementById("q4"); 

//título da questão
let tituloQ4 = document.createElement("h6");
let txtQ4 = document.createTextNode("Questão 04");

//adição do titulo aos pais
tituloQ4.appendChild(txtQ4);
divQ4.appendChild(tituloQ4).style.textAlign = "center";

let divInput1Q4 = document.createElement("div");
let label1Q4 = document.createElement("label");
label1Q4.innerText = "Quantidade:";
let input1Q4 = document.createElement("input");
input1Q4.id = "qt";
input1Q4.type = "number"
input1Q4.style.margin = "5px";


divInput1Q4.appendChild(label1Q4);
divInput1Q4.appendChild(input1Q4);
divQ4.appendChild(divInput1Q4).style.textAlign = "center";


let divInput2Q4 = document.createElement("div");
let label2Q4 = document.createElement("label");
label2Q4.innerText = "Valor Mínimo:";
let input2Q4 = document.createElement("input");
input2Q4.id = "valMin";
input1Q4.type = "number"
input2Q4.style.margin = "5px";


divInput2Q4.appendChild(label2Q4);
divInput2Q4.appendChild(input2Q4);
divQ4.appendChild(divInput2Q4).style.textAlign = "center";


let divInput3Q4 = document.createElement("div");
let label3Q4 = document.createElement("label");
let input3Q4 = document.createElement("input");
label3Q4.innerText = "Valor Máximo:";
input3Q4.id = "valMax";
input3Q4.type = "number"
input3Q4.style.margin = "5px";


divInput3Q4.appendChild(label3Q4);
divInput3Q4.appendChild(input3Q4);
divQ4.appendChild(divInput3Q4).style.textAlign = "center";

//botão de calcular
let divBtnQ4 = document.createElement("div");
let btnCalcularQ4 = document.createElement("button");
btnCalcularQ4.textContent = "Calcular";
btnCalcularQ4.style.margin = "10px";
btnCalcularQ4.className = "btn btn-primary my-2"
btnCalcularQ4.addEventListener("click",resultadoQ4);

//adição do botão aos pais
divBtnQ4.appendChild(btnCalcularQ4);
divQ4.appendChild(divBtnQ4).style.textAlign = "center";

function resultadoQ4(){
    let qt = document.getElementById("qt").value;
    let valMin = document.getElementById("valMin").value;
    let valMax = document.getElementById("valMax").value;

    console.log(qt);
    console.log(valMax-valMin);

    if(qt == "" | valMin == ""| valMax ==""){
        alert("Por favor, preencha todos os campos!")
    }else{
        let arrayNum = [];
        for(let i = 0; i < (valMax - valMin); i++){
            arrayNum.push(getRandomInt(valMin, valMax));
        }

        ordenar(arrayNum);
        console.log(arrayNum);

        let divResultadoQ4 = document.createElement("div");
        divResultadoQ4.id = "resultadoQ4"
        document.getElementById("resultadoQ4").innerText = `A quantidade de números é a diferença ${valMax} - ${valMin} = ${valMax-valMin}. Os números aleatóriamente gerados neste intervalo fechado foram: ${arrayNum}`;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function ordenar(list){
    for(let i = 0; i <list.length - 1; i++){
        for (let j = i + 1; j < list.length; j++) {
            if(list[i] > list[j]) {
                let aux = list[j]
                list[j] = list[i]
                list[i] = aux
            }
        }
    }
}
