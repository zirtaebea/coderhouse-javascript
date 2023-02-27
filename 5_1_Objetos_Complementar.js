//DEFINIR SE O NUMERO É PRIMO


/* let num = prompt('Digite um número inteiro')

function insereNumero(){
    let numero = parseInt(num)
    return numero

}



function verificaPrimos(numero){
    
    let divisor = 2

    while(numero%divisor != 0){
        divisor++
            if(numero == divisor){
            alert('O número ' + numero + ' é primo')
            } else {
            alert ('O número ' + numero + ' não é primo')
            }
    }

}

function proximosPrimos(){

    let inicio = numero 
    let fim = numero + 100

    for (let i = inicio; i<= fim; i++){
        let divisores = 0
        for (let aux = 1; aux< i; aux++){
            divisores++
            if (divisores == 2){
                alert('O próximo número primo é ' + i)
            }
        }
    }
}

insereNumero()
*/

let mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function recebeMesNumero(){
    let numeroMes = prompt('Digite um número entre 1 e 12, correspondente ao mês que deseja consultar')  
    return numeroMes 
}

let armazena = recebeMesNumero()

function nomeMes(armazena){
    switch (armazena){
        case '1':
            alert('O mês escolhido foi ' + mesesAno[0])
            break;
        case '2':
            alert('O mês escolhido foi ' + mesesAno[1])
            break; 
        case '3':
            alert('O mês escolhido foi ' + mesesAno[2])
            break;
        case '4': 
            alert('O mês escolhido foi ' + mesesAno[3])
            break;
        case '5':
            alert('O mês escolhido foi ' + mesesAno[4])
            break;
        case '6': 
            alert('O mês escolhido foi ' + mesesAno[5])
            break;
        case'7':
            alert('O mês escolhido foi ' + mesesAno[6])
            break;
        case '8': 
            alert('O mês escolhido foi ' + mesesAno[7])
            break;
        case '9':
            alert('O mês escolhido foi ' + mesesAno[8])
            break;
        case '10': 
            alert('O mês escolhido foi ' + mesesAno[9])
            break;
        case '11':
            alert('O mês escolhido foi ' + mesesAno[10])
            break;
        case '12': 
            alert('O mês escolhido foi ' + mesesAno[11])
            break;
        default:
            alert('Número inválido!\nRecarregue a pagina para tentar novamente')
            break;
    }
}


recebeMesNumero()
nomeMes()
