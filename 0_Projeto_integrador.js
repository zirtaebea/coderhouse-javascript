//armazenando os objetos em arrays
const cafe = [{id: 1, nome: 'Bolo da Luz', preco: 1, avaliacaoUsuario: 4 },
              {id: 1, nome: 'Casa de Noca', preco: 3, avaliacaoUsuario: 4 },
              {id: 1, nome: 'Santo Pão Gourmet', preco: 3, avaliacaoUsuario: 5 },
              {id: 2, nome: 'Padoca do Carmo', preco: 1, avaliacaoUsuario: 3 },
              {id: 2, nome: 'Pousada des Artes', preco: 2, avaliacaoUsuario: 5 },
              {id: 2, nome: 'Cafélier', preco: 3, avaliacaoUsuario: 4 }]


const almoco = [{id: 1, nome: 'Bella Gourmet Bistrot', preco: 4, avaliacaoUsuario: 4},
                {id: 1, nome: 'Arabesque Empório Árabe', preco: 2, avaliacaoUsuario: 3 },
                {id: 1, nome: 'Restaurante Martim Pescador', preco: 3, avaliacaoUsuario: 4 },
                {id: 2, nome: 'Restaurante Pelô Bistrô', preco: 3, avaliacaoUsuario: 3 },
                {id: 2, nome: 'Omí Restaurante', preco: 4, avaliacaoUsuario: 4 },
                {id: 2, nome: 'Restaurante Mistura Contorno', preco: 5, avaliacaoUsuario: 5}]


const jantar = [{id: 1, nome: 'La Pasta Gialla', preco: 2, avaliacaoUsuario: 4 },
                {id: 1, nome: 'Cantina Buoni Amici', preco: 2, avaliacaoUsuario: 3},
                {id: 1, nome: 'Origem', preco: 5, avaliacaoUsuario: 5},
                {id: 2, nome: 'Bar Ulisses', preco: 2, avaliacaoUsuario: 5},
                {id: 2, nome: 'Poró Restaurante & Bar', preco: 3, avaliacaoUsuario: 4},
                {id: 2, nome: 'Zanzibar', preco: 2, avaliacaoUsuario: 4 }]

const cafeAlmoco = cafe.concat(almoco)
const geral = cafeAlmoco.concat(jantar)

//criando funções
function objetosString(x, y){
    let str = "";
    for (let i = 0; i < geral.length; i++) {
        let numeroAcompanha = i + 1
        str += numeroAcompanha + ' - ' + geral[i].nome + "\n";
    }

    alert(x + y + ' são:\n\n' + str)
}

function opcaoMenu(op){
    if (op == 1){
        porBairro()
    } else if (op == 2){
        porPreco()
    } else if (op == 3){
        porAvaliacao()
    } else if (op == 4){
        mostraTodos()
    } else {
        alert('Opção inválida!\nTente novamente')
        menuNovamente()
    }
    
}

function porBairro(){
    let bairro = prompt('Escolha o bairro que você deseja:\n1 - Pituba\n2 - Centro histórico\nDigite apenas o número correspondente') 
    if (bairro == 1){
        const pitubaCafe = cafe.filter(idCafe => idCafe.id == 1)
        const pitubaAlmoco = almoco.filter(idAlmoco => idAlmoco.id == 1)
        const pitubaJantar = jantar.filter(idJantar => idJantar.id == 1)
        
        alert('Esses são os restaurantes disponíveis no bairro da Pituba')

        alert('Café da manhã:\n' + pitubaCafe[0].nome + '\n' + pitubaCafe[1].nome + '\n' + pitubaCafe[2].nome)
        alert('Almoço:\n' + pitubaAlmoco[0].nome + '\n' + pitubaAlmoco[1].nome + '\n' + pitubaAlmoco[2].nome)
        alert('Jantar:\n' + pitubaJantar[0].nome + '\n' + pitubaJantar[1].nome + '\n' + pitubaJantar[2].nome)

        menuNovamente()

    } else if (bairro == 2){
        
        const centroCafe = cafe.filter(idCafe => idCafe.id == 2)
        const centroAlmoco = almoco.filter(idAlmoco => idAlmoco.id == 2)
        const centroJantar = jantar.filter(idJantar => idJantar.id == 2)
        
        alert('Esses são os restaurantes disponíveis no bairro do Centro')

        alert('Café da manhã:\n' + centroCafe[0].nome + '\n' + centroCafe[1].nome + '\n' + centroCafe[2].nome)
        alert('Almoço:\n' + centroAlmoco[0].nome + '\n' + centroAlmoco[1].nome + '\n' + centroAlmoco[2].nome)
        alert('Jantar:\n' + centroJantar[0].nome + '\n' + centroJantar[1].nome + '\n' + centroJantar[2].nome)

        menuNovamente()

    } else {
        alert('Opção inválida!\nTente novamente')
        menuNovamente()
    }
}

function porPreco(){
    let ordenar = prompt('Como você deseja ordenar?\n 1 - Ordem Crescente\n 2 - Ordem Decrescente')
    if(ordenar == 1){

        geral.sort(function(a,b) {
            if(a.preco > b.preco) return 1;
            if(a.preco < b.preco) return -1;
            return 0;      
        })

        let textoInicial = 'Os restaurantes ordenados '
        let ordemCrescente = 'do menor para o maior preço'

        objetosString(textoInicial, ordemCrescente)
        menuNovamente()

    } else if (ordenar == 2){
        
        geral.sort(function(a,b) {
            if(a.preco > b.preco) return -1;
            if(a.preco < b.preco) return 1;
            return 0;  
        })
        
        let textoInicial = 'Os restaurantes ordenados '
        let ordemDecrescente = 'maior para o menor preço'

        objetosString(textoInicial, ordemDecrescente)
        menuNovamente()

    } else {
        alert('Opção inválida!\nTente novamente')
        menuNovamente()
    }
}

function porAvaliacao(){
    geral.sort(function (a, b){
        if(a.avaliacaoUsuario > b.avaliacaoUsuario) return -1;
        if(a.avaliacaoUsuario < b.avaliacaoUsuario) return 1;
        return 0; 
    })
    let textoInicial = 'Os restaurantes ordenados '
    let ordemAvaliacao = 'da melhor para a pior avaliação de usuário'
    objetosString(textoInicial, ordemAvaliacao)

    menuNovamente()

}

function mostraTodos(){
    let textoInicial = 'Todos os restaurantes disponíveis são:'
    let quebraLinha = '\n'

    objetosString(textoInicial, quebraLinha)
    menuNovamente()
}

function menuNovamente(){
    let perguntaContinuar = prompt('Deseja tentar novamente?\n1 - Sim\n2 - Não\nDigite apenas o número correspondente')
    if(perguntaContinuar == 1){
        let iniciarNovamente = prompt('Bem vindo ao buscador de restaurantes em Salvador!\nComo deseja buscar?\n 1 - Por bairro\n 2 - Por preço\n 3 - Por avaliação\n 4 - Mostrar todos')
        opcaoMenu(iniciarNovamente)
    } else if (perguntaContinuar == 2){
        alert('Volte sempre!')
    } 

}

//inicializando e chamando função
let menuIniciar = prompt('Bem vindo ao buscador de restaurantes em Salvador!\nComo deseja buscar?\n 1 - Por bairro\n 2 - Por preço\n 3 - Por avaliação\n 4 - Mostrar todos')
opcaoMenu(menuIniciar)
