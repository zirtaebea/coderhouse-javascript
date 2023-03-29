//armazenando os objetos em arrays
const geral = [
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Bolo da Luz",
    ref: "cafe-da-manha",
    preco: "$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Casa de Noca",
    ref: "cafe-da-manha",
    preco: "$$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Santo Pão Gourmet",
    ref: "cafe-da-manha",
    preco: "$$$",
    avaliacaoUsuario: 5,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Padoca do Carmo",
    ref: "cafe-da-manha",
    preco: "$",
    avaliacaoUsuario: 3,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Pousada des Artes",
    ref: "cafe-da-manha",
    preco: "$$",
    avaliacaoUsuario: 5,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Cafélier",
    ref: "cafe-da-manha",
    preco: "$$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Bella Gourmet Bistrot",
    ref: "almoco",
    preco: "$$$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Arabesque Empório Árabe",
    ref: "almoco",
    preco: "$$",
    avaliacaoUsuario: 3,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Restaurante Martim Pescador",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Restaurante Pelô Bistrô",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 3,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Omí Restaurante",
    ref: "almoco",
    preco: "$$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Restaurante Mistura Contorno",
    ref: "almoco",
    preco: "$$$$$",
    avaliacaoUsuario: 5,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "La Pasta Gialla",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Cantina Buoni Amici",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 3,
    favorito: " ",
  },
  {
    id: 1,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Pituba",
    nome: "Origem",
    ref: "jantar",
    preco: "$$$$$",
    avaliacaoUsuario: 5,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Bar Ulisses",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 5,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Poró Restaurante & Bar",
    ref: "jantar",
    preco: "$$$",
    avaliacaoUsuario: 4,
    favorito: " ",
  },
  {
    id: 2,
    imagem:
      "https://pelourinhodiaenoite.salvador.ba.gov.br/wp-content/uploads/2018/11/IMG_0011.jpg",
    bairro: "Centro",
    nome: "Zanzibar",
    ref: "jantar",
    preco: "$$",
    avaliacaoUsuario: 4,
    favorito: " ",
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
    //condicional acesso a um obj
    filtro = e?.target?.id;
    console.log(filtro);
    mostraRestaurante();
  };
});

//consultando o input
function consultarBairro() {
  const nomebairro = inputBairro.value.toUpperCase();
  if (nomebairro != "") {
    //operador ternario
    return geral.some((local) => local.bairro.toLocaleUpperCase() == nomebairro)
      ? nomebairro
      : alert("Bairro não cadastrado!");
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

//botao favoritar bairro p usar o storage

//escrever lista de restaurantes
function mostraRestaurante() {
  const restaurante = document.getElementById("card-restaurantes");
  restaurante.innerHTML = "";
  let todos = [];
  const verificaBairro = consultarBairro();
  if (filtro != "" && filtro != "fav") {
    const filtraTodos = "todos";
    //operador ternario
    filtro != filtraTodos
      ? (todos = geral.filter(
          (local) =>
            local.bairro.toUpperCase() == verificaBairro && filtro == local.ref
        ))
      : (todos = geral.filter(
          (local) => local.bairro.toUpperCase() == verificaBairro
        ));
  } else {
    todos = geral.filter(
      (local) => local.bairro.toUpperCase() == verificaBairro
    );
  }
  for (let rest of todos) {
    let li = document.createElement("li");
    li.setAttribute("id", rest.nome);
    li.innerHTML = `<img src="${rest.imagem}" class="imagens-restaurantes">
                        <br>
                        <p class="itens-lista">${rest.nome}
                        <br>
                        ${rest.preco}
                        <br>
                        ${rest.avaliacaoUsuario}</p>
                        <button onclick="addItem('${rest.nome}')" type="button" class="favorito">Favoritar</buttton>`;
    restaurante.appendChild(li);
  }
}
let arr = [];
function addItem(element) {
  console.log(element);
  localStorage.setItem("restFavoritos", arr);
  let listinha = document.getElementById(element);
  console.log(listinha);
  arr.push(listinha.outerHTML);
  localStorage.restFavoritos = JSON.stringify(arr);

  swal({
    position: "top-end",
    icon: "success",
    title: "Favoritado",
    text: "Seu restaurante foi favoritado com sucesso!",
    button: false,
    timer: 1500,
  });
}

novoEvento.addEventListener("submit", salvarNovoEvento);
