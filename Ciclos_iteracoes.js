/*
ATIVIDADE: um algoritmo usando for, while e do while
IDEIA: descobrir número aleatório de 1 a 100
*/

var numSecreto = parseInt(Math.random()*100 + 1) //Math.random é um numero aleatorio entre 0 e 0.9 que para se transformar em um inteiro precisa multiplicar por 1

//descobrindo o número secreto

while (numSecreto != numChute){
    var numChute = prompt('Insira um número inteiro positivo entre 1 e 100')
    if (numChute>numSecreto){
        alert ('Você errou, o número é menor')
    } else if (numChute<numSecreto){
        alert('Você errou, o número é maior')
    } else if (numChute == numSecreto){
        alert('Você acertou, o número é ' + numSecreto)
            for(let i = 1; i<=10; i++){
                let multiplica = numSecreto*i
                alert('O número ' + numSecreto + ' multiplicado por ' + i + ' é igual a ' + multiplica)
            }
    }
}




