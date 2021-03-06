# TP3_Javascript
 
#### Questão 01
Retorne ao Algoritmo 01 do TP2. Vamos modificá-lo para:

Crie um componente com duas caixas de texto que só aceitam números e que tenham os rótulos (label) valor mínimo e valor máximo, checando sempre se o valor mínimo é menor que o valor máximo. O componente deve ainda possuir um botão calcular que, quando acionado, deve contar e imprimir quantos números existem entre valor mínimo e valor máximo (considere o intervalo aberto*) que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível calcular se algum dos valores, mínimo ou máximo, não for informado.
* intervalo aberto - Ou seja, quantos números existem entre valor mínimo e valor máximo, excluindo o valor mínimo e valor máximo. Entre 0 e 12, o único múltiplo de 2 e de 3 simultaneamente seria 6, já que desconsideraríamos 0 e 12. 

#### Questão 02
Retorne ao Algoritmo 02 do TP2. Vamos modificá-lo para:

Crie um componente com uma caixa de texto que só aceita números e que tenha o rótulo (label) Calcular o fatorial de. O componente deve ainda possuir um botão calcular que, quando acionado, deve calcular o fatorial do número digitado, imprimindo o resultado e o tempo necessário para a execução. (Dica: Usar o objeto JavaScript Date)

O resultado deve ser mostrado no formato 53! = XXXXXX (Calculado em yyy milisegundos);
O código deve conter uma função que calcula e retorna o fatorial, e não apenas imprimir uma string com a resposta.

#### Questão 03
Retorne ao Algoritmo 03 do TP2. Vamos modificá-lo para:

Crie um componente que possua um botão criar relatório que, quando acionado, deve imprimir um relatório de resultados da disciplina JavaScript para 20 alunos, no formato de tabela — não use a tag <table>.

As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
Cada aluno deve ser representado por um registro composto por número e nota
Use objetos literais para o conceito de Aluno, ou, caso prefira, use abordagem orientada a objetos. Veja conceitos de Função construtora e Programação OO com JavaScript, além de como usar Classes em JavaScript;
Armazene a nota do aluno como uma variável.
Os registros devem ser armazenados em um array;
A impressão do relatório deve conter:
um título;
os resultados mostrados linha a linha no formato Aluno xx — Nota yy [(A/RE)PROVADO]; e
um rodapé com a estatística final no formato APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)

#### Questão 04
Retorne ao Algoritmo 04 do TP2. Vamos modificá-lo para:

Crie um componente que possua 3 caixas de texto que só aceitam números e que tenham os rótulos (label) Quantidade de números, valor mínimo e valor máximo. O componente deve ainda possuir um botão calcular que, quando acionado, deve criar um array com quantidade de números aleatórios e ordená-los. Os números devem estar entre valor mínimo e valor máximo (intervalo fechado, ou seja, incluindo o valor mínimo e valor máximo).

A quantidade de números deve ser menor ou igual à diferença entre valor máximo e valor mínimo.

#### Questão 05
Retorne ao Algoritmo 05 do TP2. Vamos modificá-lo para:

Crie um componente que possua 3 caixas de texto que só aceitam números e que tenham os rótulos (label) lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que, quando acionado, deve dizer se um triângulo formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno.

#### Questão 06
Criar um componente para criação de usuário e login em uma aplicação (sign up / sign in).

No 1º cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário. Se for feito o login com sucesso, o componente deve levar ao cenário 2; caso contrário, deve alertar o usuário e voltar ao início do cenário 1.

Se o usuário optar por criar um usuário, o componente deve criar o registro de um novo usuário e voltar para o início do cenário 1.

No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão (ou link) para log out, retornando ao início do cenário 1.


