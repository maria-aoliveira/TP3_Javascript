let divQ3 = document.getElementById("q3"); 

//título da questão
let tituloQ3 = document.createElement("h6");
let txtQ3 = document.createTextNode("Questão 03");

//adição do titulo aos pais
tituloQ3.appendChild(txtQ3);
divQ3.appendChild(tituloQ3).style.textAlign = "center";

//resultado
let divResultadoQ3 = document.createElement("div");
divResultadoQ3.id = "resultadoQ3";
divQ3.appendChild(divResultadoQ3);

//botao 
let divBtnQ3 = document.createElement("div");
let btnCalcularQ3 = document.createElement("button");
btnCalcularQ3.id = "btnCalcularQ3"
btnCalcularQ3.textContent = "Relatório";
btnCalcularQ3.className = "btn btn-primary my-2"
btnCalcularQ3.addEventListener("click", clearBox);

//adição do botão aos pais
divBtnQ3.appendChild(btnCalcularQ3);
divQ3.appendChild(divBtnQ3).style.textAlign = "center";


function relAlunos(){

class Aluno {
    constructor(numero, nota){
        this.numero = numero;
        this.nota = nota;
    }
  
    situacaoAluno(){
      return this.nota >= 60 ? "APROVADO" : "REPROVADO"; 
    }
  }
  
  const qtdAlunos = 20;
  let listaAlunos = [];
  for (let i = 1; i <= qtdAlunos; i++){
    let aluno = new Aluno(i, Math.floor(Math.random() * 100));
    listaAlunos.push(aluno);
  }
  
  for (let aluno of listaAlunos){
    let divAluno = document.createElement("div");
    divAluno.id = `aluno-${aluno.numero}`;

    // Uma div para o número do aluno:
    let divNumero = document.createElement("div");
     // divNumero.id = "num"
    // document.getElementById("num").innerText = aluno.numero;
    divNumero.innerText = aluno.numero;
    divNumero.style = "float: left; width: 20%;";
    divNumero.style.textAlign = "center";

    // para a nota:
    let divNota = document.createElement("div");
    // divNota.id = "alunoNota";
    // document.getElementById("alunoNota").innerText = aluno.nota;
    divNota.innerText = aluno.nota;
    divNota.style = "float: left; width: 20%;";
    divNota.style.textAlign = "center";


    // para a situação:
    let divSituacao = document.createElement("div");
    // divNota.id = "alunoSituacao";
    // document.getElementById("alunoSituacao").innerText = aluno.situacaoAluno();
    divSituacao.innerText = aluno.situacaoAluno();
    divSituacao.style = "float: left; width: 60%;";
    divSituacao.style.textAlign = "center";
    if (aluno.situacaoAluno () == "APROVADO"){
        divSituacao.style.backgroundColor = "green";
        divNumero.style.backgroundColor = "green";
        divNota.style.backgroundColor = "green";
        
    }else{
        divSituacao.style.backgroundColor = "red";
        divNumero.style.backgroundColor = "red";
        divNota.style.backgroundColor = "red";

    }
  
    divAluno.appendChild(divNumero);
    divAluno.appendChild(divNota);
    divAluno.appendChild(divSituacao);
    divResultadoQ3.appendChild(divAluno);
  }
let aprovados = 0;
for(let aluno of listaAlunos){
let resultado = "";
  if (aluno.nota >= 60){
    resultado = "Aprovado";
    aprovados++;
  } else {
    resultado = "Reprovado";
  }
}

let divRodape = document.createElement("div");
divResultadoQ3.appendChild(divRodape);
divRodape.innerText = `Do total de ${qtdAlunos} alunos, ${aprovados} (${(aprovados/qtdAlunos * 100).toFixed(2)}%) foram aprovados e ${qtdAlunos - aprovados} (${((qtdAlunos-aprovados)/qtdAlunos * 100).toFixed(2)}%) foram reprovados.`
}


function clearBox(elementID){
  divResultadoQ3.innerText = '';
  relAlunos()
  // document.getElementById("btnCalcularQ3").style.display = "none";
}
