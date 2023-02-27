let mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
/*let mesesCom31 = [mesesAno[0], mesesAno[2], mesesAno[4], mesesAno[6], mesesAno[7], mesesAno[9], mesesAno[11]]
let mesesCom30 = [mesesAno[3], mesesAno[5], mesesAno[8], mesesAno[10]]
let mesCom28 = mesesAno[1]
*/
function recebeMesNumero(){
    let numeroMes = prompt('Digite um número entre 1 e 12, correspondente ao mês que deseja consultar')  
    return numeroMes
}

let armazena = recebeMesNumero()

function nomeMes(){

    if(armazena == 1){
        alert('O mês escolhido foi ' + mesesAno[0])       
    } else if (armazena == 2){
        alert('O mês escolhido foi ' + mesesAno[1]) 
    } else if (armazena == 3){
        alert('O mês escolhido foi ' + mesesAno[2]) 
    } else if (armazena == 4){
        alert('O mês escolhido foi ' + mesesAno[3]) 
    } else if (armazena == 5){
        alert('O mês escolhido foi ' + mesesAno[4]) 
    } else if (armazena == 6){
        alert('O mês escolhido foi ' + mesesAno[5]) 
    } else if (armazena == 7){
        alert('O mês escolhido foi ' + mesesAno[6]) 
    } else if (armazena == 8){
        alert('O mês escolhido foi ' + mesesAno[7]) 
    } else if (armazena == 9){
        alert('O mês escolhido foi ' + mesesAno[8]) 
    } else if (armazena == 10){
        alert('O mês escolhido foi ' + mesesAno[9]) 
    } else if (armazena == 11){
        alert('O mês escolhido foi ' + mesesAno[10]) 
    } else if (armazena == 12){
        alert('O mês escolhido foi ' + mesesAno[11]) 
    } else {
        alert ('Número inválido\nRecarregue a página')
    }
}

function quantosDiasMeses(){
    if(armazena == 1 || armazena == 3 || armazena == 5 || armazena == 7 || armazena == 8 || armazena == 10 || armazena == 12){
        alert('O mês escolhido tem 31 dias')
    } else if (armazena == 4 || armazena == 6 || armazena == 9) {
        alert('O mês escolhido tem 30 dias')
    } else {
        alert('O mês escolhido tem 28 dias')
    }
}


recebeMesNumero()
nomeMes()
quantosDiasMeses()
