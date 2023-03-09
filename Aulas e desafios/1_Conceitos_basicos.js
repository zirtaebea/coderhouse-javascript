//bem-vindo qual é o seu nome? 
let mensagemNome = prompt("Seja bem-vindo! Qual é o seu nome?");
alert("Seja bem-vindo, " + mensagemNome + "!"); //concatenação

//inserção de números
let numeroUm = parseInt(prompt(mensagemNome + ", insira um número inteiro: "));
let numeroDois = parseInt(prompt(mensagemNome + ", insira outro número inteiro: "));

//definindo soma e multiplicação
let soma = numeroUm + numeroDois;
let multiplicacao = numeroUm*numeroDois;

//resultados
alert("Os números inseridos foram " + numeroUm + " e " + numeroDois);
alert("A soma dos números é " + soma + "\nA multiplicação entre os números é " + multiplicacao);


