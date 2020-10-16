let divQ1 = document.getElementById("q1"); 

//título da questão
let tituloQ1 = document.createElement("h6");
let txtQ1 = document.createTextNode("Questão 01");

//adição do titulo aos pais
tituloQ1.appendChild(txtQ1);
divQ1.appendChild(tituloQ1).style.textAlign = "center";

// label e input1 do valor mínimo
let divInput1Q1 = document.createElement("div");
let label1Q1 = document.createElement("label");
label1Q1.textContent = "Valor Mínimo:";
let input1Q1 = document.createElement("input");
input1Q1.style.margin = "5px";
input1Q1.type = "number";
input1Q1.id = "min";

//adição label e input min. aos pais
divInput1Q1.appendChild(label1Q1);
divInput1Q1.appendChild(input1Q1);
divQ1.appendChild(divInput1Q1).style.textAlign = "center";

// label e input1 do valor máximo
let divInput2Q1 = document.createElement("div");
let label2Q1 = document.createElement("label"); 
label2Q1.textContent = "Valor Máximo:";
let input2Q1 = document.createElement("input");
input2Q1.style.margin = "5px";
input2Q1.type = "number";
input2Q1.id = "max";


//adição label e input max. aos pais
divInput2Q1.appendChild(label2Q1);
divInput2Q1.appendChild(input2Q1);
divQ1.appendChild(divInput2Q1).style.textAlign = "center";

//botão de calcular
let divBtnQ1 = document.createElement("div");
let btnCalcularQ1 = document.createElement("button");
btnCalcularQ1.textContent = "Calcular";
btnCalcularQ1.style.marginTop = "80px!important";
btnCalcularQ1.style.marginBottom = "10px!important";
btnCalcularQ1.className = "btn btn-primary my-2"
btnCalcularQ1.addEventListener("click",numMinMax);

//adição do botão aos pais
divBtnQ1.appendChild(btnCalcularQ1);
divQ1.appendChild(divBtnQ1).style.textAlign = "center";

function numMinMax(){
    let min = document.getElementById("min");
    let max = document.getElementById("max"); 

    if (Number(min.value) < Number(max.value)){
        let resultado = 0;
        for(let i = min.value; i < Number(max.value); i ++){
            if (i%2 == 0 && i%3 == 0){
                resultado++;
           }
        }
         console.log(resultado);
         let divResultadoQ1 = document.createElement("div");
         divResultadoQ1.id = "resultadoQ1";
         divQ1.appendChild(divResultadoQ1).style.textAlign = "center";
         document.getElementById("resultadoQ1").textContent = `Existem ${resultado} múltiplos de 2 e 3 simultaneamente entre os números ${min.value} e ${max.value}`; 
    }else{
        alert("O número mínimo é maior que o máximo ou os campos estão vazios!"); 
    }
}





