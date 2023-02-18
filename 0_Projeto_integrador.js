/*
ideia: selecionar bairro e depois: 
1- chamar função para escolher
se quer café da manhã almoço ou jantar 
2- colocar dentro de cada classe um restaurante atribuido
as propriedades do construtor
3- fazer uma ultima função de retornar ao menu principal
*/

//iniciar
let escolhaBairro = prompt('Escolha o bairro que você deseja:\n1 - Pituba\n2 - Centro histórico\nDigite apenas o número correspondente')

//arrays pituba
let listaCafePituba = ['Cantina Cosa Notra', ' Casa de Noca', ' Santo Pão Gourmet']
let listaAlmocoPituba = ['Bella Gourmet Bistrot', ' Arabesque Empório Árabe', ' Restaurante Martim Pescador'] 
let listaJantarPituba = ['La Pasta Gialla', ' Cantina Buoni Amici', ' Origem ']


//arrays centro
let listaCafeCentro = ['Padoca do Carmo', ' Pousada des Artes', ' Cafélier']
let listaAlmocoCentro = ['Restaurante Pelô Bistrô', ' Omí Restaurante', ' Restaurante Mistura Contorno']
let listaJantarCentro = ['Bar Ulisses', ' Poró Restaurante & Bar', ' Zanzibar']


//objeto pituba com restaurantes e metodo
class pituba{
    constructor(restaurantesCafe, restaurantesAlmoco, restauranteJantar){
        this.cafeManha = restaurantesCafe
        this.almoco = restaurantesAlmoco
        this.jantar = restauranteJantar
    }
   
    escolherRefeicaoPituba(){ //METODO -- COMO CHAMAR? nomeDaConst.metodo()
        let escolhaPituba = prompt('Escolha o tipo de refeição\n1 - Café da manhã\n2 - Almoço\n3 - Jantar\nDigite apenas o número correspondente')
            if (escolhaPituba == 1){
                alert('Estes são os restaurantes disponíveis:\n' + this.cafeManha)
                menuNovamente()
            } else if (escolhaPituba == 2) {
                alert('Estes são os restaurantes disponíveis:\n' + this.almoco)
                menuNovamente()
            } else if (escolhaPituba == 3){
                alert('Estes são os restaurantes disponíveis:\n' + this.jantar)
                menuNovamente()
            }

    }
}

const restaurantesPituba = new pituba(listaCafePituba, listaAlmocoPituba, listaJantarPituba) //guardando os valores na const

//objeto centro com restaurantes e metodo
class centro{
    constructor(resCafe, resAlmoco, resJantar){
        this.cafe = resCafe
        this.almoco = resAlmoco
        this.jantar = resJantar
    }

    escolherRefeicaoCentro(){
        let escolhaCentro = prompt('Escolha o tipo de refeição\n1 - Café da manhã\n2 - Almoço\n3 - Jantar\nDigite apenas o número correspondente')
        if (escolhaCentro == 1){
            alert('Estes são os restaurantes disponíveis:\n' + this.cafe)
            menuNovamente()
        } else if (escolhaCentro == 2) {
            alert('Estes são os restaurantes disponíveis:\n' + this.almoco)
            menuNovamente()
        } else if (escolhaCentro == 3){
            alert('Estes são os restaurantes disponíveis:\n' + this.jantar)
            menuNovamente()
        }

    }
}

const restaurantesCentro = new centro(listaCafeCentro, listaAlmocoCentro, listaJantarCentro) //guardando os valores na const 

//criando funções
function menuBairro(escolhaBairro){
    if (escolhaBairro == 1){
        alert('Por favor escolha o tipo de refeição')
        restaurantesPituba.escolherRefeicaoPituba()
    } else if (escolhaBairro == 2){
        alert('Por favor escolha o tipo de refeição')
        restaurantesCentro.escolherRefeicaoCentro()
    } else {
        alert('Valor inválido, tente novamente')
        menuNovamente()
    }

}


function menuNovamente(){
    let perguntaContinuar = prompt('Deseja tentar novamente?\n1 - Sim\n2 - Não\nDigite apenas o número correspondente')
    if(perguntaContinuar == 1){
        let escolhaBairro = prompt('Escolha o bairro que você deseja:\n1 - Pituba\n2 - Centro histórico\nDigite apenas o número correspondente')
        menuBairro(escolhaBairro)
    } else if (perguntaContinuar == 2){
        alert('Volte sempre!')
    } 

}


//chamando a funcao
menuBairro(escolhaBairro)
