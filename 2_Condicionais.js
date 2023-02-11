// ideia: meia passagem
// quem tem direito? 
// menor de 18; maior de 18 e estudante
//lembrar que maior de 65 anos é gratuidade

//introduzindo
alert ('Descubra se você tem direito a meia passagem respondendo os campos com atenção')
alert ('Preencha sua idade com números inteiros apenas')


//declarando variaveis 
let idade = prompt('Qual é a sua idade? ')

//alerta explicaçao
alert ('Responda a próxima pergunta com true ou false minúsculo (sem CAPS LOCK), sendo true = sim e false = não')

//declarando estudante
let estudante = prompt('Você é estudante? ')

//condicional
if ((idade<=18) || (idade>18 && estudante == true)) {
    alert ('Legal, Você tem direito a meia passagem!');
} else if (idade>=65) {
 alert ('Você não paga mais passagem, a partir dos 65 anos a passagem é gratuidade')   
} else {
    alert("você não tem direito a meia passagem :("); 
}