//DEFINIR SE O NUMERO É PRIMO

let numero

function insereNumero(num){
    let num = prompt('Digite um número inteiro')
    return num
}


function proximosPrimos(){
    
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