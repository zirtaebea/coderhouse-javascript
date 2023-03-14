//ATENCAO, O DOC AINDA ESTÁ SEM OS FILTROS, só funciona digitando os bairros: pituba e centro.
//falta formatar o css dos cards dos restaurantes

//armazenando os objetos em arrays
const cafe = [
  { id: 1, nome: "Bolo da Luz", preco: "$", avaliacaoUsuario: 4 },
  { id: 1, nome: "Casa de Noca", preco: "$$$", avaliacaoUsuario: 4 },
  { id: 1, nome: "Santo Pão Gourmet", preco: "$$$", avaliacaoUsuario: 5 },
  { id: 2, nome: "Padoca do Carmo", preco: "$", avaliacaoUsuario: 3 },
  { id: 2, nome: "Pousada des Artes", preco: "$$", avaliacaoUsuario: 5 },
  { id: 2, nome: "Cafélier", preco: "$$$", avaliacaoUsuario: 4 },
];

const almoco = [
  { id: 1, nome: "Bella Gourmet Bistrot", preco: "$$$$", avaliacaoUsuario: 4 },
  { id: 1, nome: "Arabesque Empório Árabe", preco: "$$", avaliacaoUsuario: 3 },
  {
    id: 1,
    nome: "Restaurante Martim Pescador",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  { id: 2, nome: "Restaurante Pelô Bistrô", preco: "$$$", avaliacaoUsuario: 3 },
  { id: 2, nome: "Omí Restaurante", preco: "$$$", avaliacaoUsuario: 4 },
  {
    id: 2,
    nome: "Restaurante Mistura Contorno",
    preco: "$$$$$",
    avaliacaoUsuario: 5,
  },
];

const jantar = [
  { id: 1, nome: "La Pasta Gialla", preco: "$$", avaliacaoUsuario: 4 },
  { id: 1, nome: "Cantina Buoni Amici", preco: "$$", avaliacaoUsuario: 3 },
  { id: 1, nome: "Origem", preco: "$$$$$", avaliacaoUsuario: 5 },
  { id: 2, nome: "Bar Ulisses", preco: "$$", avaliacaoUsuario: 5 },
  { id: 2, nome: "Poró Restaurante & Bar", preco: "$$$", avaliacaoUsuario: 4 },
  { id: 2, nome: "Zanzibar", preco: "$$", avaliacaoUsuario: 4 },
];

//geral
const cafeAlmoco = cafe.concat(almoco);
const geral = cafeAlmoco.concat(jantar);

//filtros
const centroCafe = cafe.filter((idCafe) => idCafe.id == 2);
const centroAlmoco = almoco.filter((idAlmoco) => idAlmoco.id == 2);
const centroJantar = jantar.filter((idJantar) => idJantar.id == 2);

const pitubaCafe = cafe.filter((idCafe) => idCafe.id == 1);
const pitubaAlmoco = almoco.filter((idAlmoco) => idAlmoco.id == 1);
const pitubaJantar = jantar.filter((idJantar) => idJantar.id == 1);

//acessando html
const novoEvento = document.getElementById("novoEvent");
const inputBairro = document.getElementById("busca");

//evento
function salvarNovoEvento(e) {
  e.preventDefault();
  const bairro = inputBairro.value;
  mostraRestaurante(bairro);
  if (mostraRestaurante(bairro) == true) {
    console.log("O evento é válido");
  } else {
    console.log("O evento é inválido");
  }
}

//funções
function mostraRestaurante(nome) {
  if (nome != "") {
    const nomeBairro = nome.toUpperCase();
    if (nomeBairro == "PITUBA") {
      const geralPituba = geral.filter((local) => local.id == 1);
      for (let pituba of geralPituba) {
        const restaurante = document.getElementById("card-restaurantes");
        let li = document.createElement("li");
        li.innerHTML = `<br>
                        Nome: ${pituba.nome} 
                        <br>
                        Preço: ${pituba.preco}
                        <br>
                        Avaliação: ${pituba.avaliacaoUsuario}`;
        restaurante.appendChild(li);
      }
    } else if (nomeBairro == "CENTRO") {
      const geralCentro = geral.filter((local) => local.id == 2);
      for (let centro of geralCentro) {
        const restaurante = document.getElementById("card-restaurantes");
        let li = document.createElement("li");
        li.innerHTML = `<br>
                        Nome: ${centro.nome} 
                        <br>
                        Preço: ${centro.preco}
                        <br>
                        Avaliação: ${centro.avaliacaoUsuario}`;
        restaurante.appendChild(li);
      }
    } else {
      alert("Bairro inexistente :(");
    }
  } else {
    alert("Preencha o campo!");
  }
}

novoEvento.addEventListener("submit", salvarNovoEvento);
