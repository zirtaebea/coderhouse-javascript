//ATENCAO, O DOC AINDA ESTÁ SEM OS FILTROS, só funciona digitando os bairros: pituba e centro.
//falta formatar o css dos cards dos restaurantes

//armazenando os objetos em arrays
const cafe = [
  { id: 1, nome: "Bolo da Luz", ref: "cafe", preco: "$", avaliacaoUsuario: 4 },
  {
    id: 1,
    nome: "Casa de Noca",
    ref: "cafe",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    nome: "Santo Pão Gourmet",
    ref: "cafe",
    preco: "$$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 2,
    nome: "Padoca do Carmo",
    ref: "cafe",
    preco: "$",
    avaliacaoUsuario: 3,
  },
  {
    id: 2,
    nome: "Pousada des Artes",
    ref: "cafe",
    preco: "$$",
    avaliacaoUsuario: 5,
  },
  { id: 2, nome: "Cafélier", ref: "cafe", preco: "$$$", avaliacaoUsuario: 4 },
];

const almoco = [
  {
    id: 1,
    nome: "Bella Gourmet Bistrot",
    ref: "almoco",
    preco: "$$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    nome: "Arabesque Empório Árabe",
    ref: "almoco",
    preco: "$$",
    avaliacaoUsuario: 3,
  },
  {
    id: 1,
    nome: "Restaurante Martim Pescador",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 2,
    nome: "Restaurante Pelô Bistrô",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 3,
  },
  {
    id: 2,
    nome: "Omí Restaurante",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 2,
    nome: "Restaurante Mistura Contorno",
    ref: "almoco",
    preco: "$$$$$",
    avaliacaoUsuario: 5,
  },
];

const jantar = [
  {
    id: 1,
    nome: "La Pasta Gialla",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    nome: "Cantina Buoni Amici",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 3,
  },
  { id: 1, nome: "Origem", ref: "jantar", preco: "$$$$$", avaliacaoUsuario: 5 },
  {
    id: 2,
    nome: "Bar Ulisses",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 2,
    nome: "Poró Restaurante & Bar",
    ref: "jantar",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  { id: 2, nome: "Zanzibar", ref: "jantar", preco: "$$", avaliacaoUsuario: 4 },
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
//onst filtroBotao = document.getElementsByClassName("filtros");

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

const filtrar = () => {
  const jantar = document.getElementsByName("jantar");
  const almoco = document.getElementsByName("almoco");
  const todos = document.getElementsByName("todos");
  e.preventDefault();
  const refeicao = geral.filter((restaurante) => restaurante.ref);
  for (const ref of refeicao) {
    if (refeicao == "cafe") {
      const restaurante = document.getElementById("card-restaurantes");
      let li = document.createElement("li");
      li.innerHTML = `<br>
                      Nome: ${ref.nome} 
                      <br>
                      Preço: ${ref.preco}
                      <br>
                      Avaliação: ${ref.avaliacaoUsuario}`;
      restaurante.appendChild(li);
      mostraRestaurante(filtro);
      jantar.remove();
      almoco.remove();
      todos.remove();
    } else if (refeicao == "jantar") {
      let filtro = ref.nome;
      mostraRestaurante(filtro);
    } else if (refeicao == "almoco") {
      let filtro = ref.nome;
      mostraRestaurante(filtro);
    }
  }
};

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
