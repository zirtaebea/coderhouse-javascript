//armazenando os objetos em arrays
const geral = [
  {
    id: 1,
    bairro: "Pituba",
    nome: "Bolo da Luz",
    ref: "cafe-da-manha",
    preco: "$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Casa de Noca",
    ref: "cafe-da-manha",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Santo Pão Gourmet",
    ref: "cafe-da-manha",
    preco: "$$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Padoca do Carmo",
    ref: "cafe-da-manha",
    preco: "$",
    avaliacaoUsuario: 3,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Pousada des Artes",
    ref: "cafe-da-manha",
    preco: "$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Cafélier",
    ref: "cafe-da-manha",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Bella Gourmet Bistrot",
    ref: "almoco",
    preco: "$$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Arabesque Empório Árabe",
    ref: "almoco",
    preco: "$$",
    avaliacaoUsuario: 3,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Restaurante Martim Pescador",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Restaurante Pelô Bistrô",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 3,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Omí Restaurante",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Restaurante Mistura Contorno",
    ref: "almoco",
    preco: "$$$$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "La Pasta Gialla",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Cantina Buoni Amici",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 3,
  },
  {
    id: 1,
    bairro: "Pituba",
    nome: "Origem",
    ref: "jantar",
    preco: "$$$$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Bar Ulisses",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 5,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Poró Restaurante & Bar",
    ref: "jantar",
    preco: "$$$",
    avaliacaoUsuario: 4,
  },
  {
    id: 2,
    bairro: "Centro",
    nome: "Zanzibar",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 4,
  },
];

//acessando html
const novoEvento = document.getElementById("novoEvent");
const inputBairro = document.getElementById("busca");
const filtrosgeral = document.querySelectorAll(".nomeref");

//filtros
let filtro = "";

filtrosgeral.forEach((element) => {
  element.onclick = (e) => {
    console.log(e);
    filtro = e.target.id;
    console.log(filtro);
    mostraRestaurante();
  };
});

//consultando o input
function consultarBairro() {
  const nomebairro = inputBairro.value.toUpperCase();
  if (nomebairro != "") {
    if (geral.some((local) => local.bairro.toLocaleUpperCase() == nomebairro)) {
      return nomebairro;
    } else {
      alert("Bairro não cadastrado!");
    }
  } else {
    alert("Campo não preenchido!");
  }
  return "";
}

//evento de evitar redirecionar para outra pagina
function salvarNovoEvento(e) {
  e.preventDefault();
  let bairro = inputBairro.value;
  mostraRestaurante(bairro);
}

//escrever lista de restaurantes
function mostraRestaurante() {
  const restaurante = document.getElementById("card-restaurantes");
  restaurante.innerHTML = "";
  let todos = [];
  const verificaBairro = consultarBairro();
  if (filtro != "") {
    todos = geral.filter(
      (local) =>
        local.bairro.toUpperCase() == verificaBairro && filtro == local.ref
    );
  } else {
    todos = geral.filter(
      (local) => local.bairro.toUpperCase() == verificaBairro
    );
  }
  for (let rest of todos) {
    let li = document.createElement("li");
    li.innerHTML = `<br>
                        Nome: ${rest.nome} 
                        <br>
                        Preço: ${rest.preco}
                        <br>
                        Avaliação: ${rest.avaliacaoUsuario}`;
    restaurante.appendChild(li);
  }
}

novoEvento.addEventListener("submit", salvarNovoEvento);
