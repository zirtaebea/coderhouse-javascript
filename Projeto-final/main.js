//acessar arquivo com extensão 'live server' do VSCODE

//acessando html
const novoEvento = document.getElementById("novoEvent");
const inputBairro = document.getElementById("busca");
const filtrosgeral = document.querySelectorAll(".nomeref");
const loading = document.getElementById("carregando");

//filtros
let filtro = "";

//loading div loading -> class show/hidden -> ideia p depois
const showLoading = function () {
  Swal.fire({
    title: "Carregando restaurantes",
    html: "Aguarde um momento...",
    allowEscapeKey: false,
    allowOutsideClick: false,
    timer: 2000,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

//armazenando os objetos em arrays
const geral = fetch("restaurantes.json")
  .then((resp) => resp.json())
  .then((listaRest) => {
    filtrosgeral.forEach((element) => {
      element.onclick = (e) => {
        //condicional acesso a um obj
        filtro = e?.target?.id;
        mostraRestaurante(listaRest);
      };
    });
    novoEvento.addEventListener("submit", (e) => {
      salvarNovoEvento(e, listaRest);
    });
  });

//consultando o input
function consultarBairro(listaRest) {
  const nomebairro = inputBairro.value.toUpperCase();
  if (nomebairro != "") {
    //operador ternario
    return listaRest.some(
      (local) => local.bairro.toLocaleUpperCase() == nomebairro
    )
      ? nomebairro
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Bairro não cadastrado!",
          timer: 4000,
        });
  } else {
    Swal.fire({
      icon: "warning",
      title: "Campo não preenchido",
      text: "Verifique a caixa de busca e tente novamente",
      timer: 4000,
    });
  }
  return "";
}

//evento de evitar redirecionar para outra pagina
function salvarNovoEvento(e, listaRest) {
  e.preventDefault();
  showLoading();
  setTimeout(() => {
    mostraRestaurante(listaRest);
  }, 2000);
}

//escrever lista de restaurantes
function mostraRestaurante(listaRest) {
  const restaurante = document.getElementById("card-restaurantes");
  restaurante.innerHTML = "";
  let todos = [];
  const verificaBairro = consultarBairro(listaRest);

  if (filtro != "") {
    const filtraTodos = "todos";

    //operador ternario
    filtro != filtraTodos
      ? (todos = listaRest.filter(
          (local) =>
            local.bairro.toUpperCase() == verificaBairro && filtro == local.ref
        ))
      : (todos = listaRest.filter(
          (local) => local.bairro.toUpperCase() == verificaBairro
        ));

    //aba filtrados
    if (filtro == "favoritados") {
      let meuStorage = localStorage.restFavoritos;
      for (let i = 0; i < meuStorage.length; i++) {
        todos = listaRest.filter((local) => local.favorito.includes("sim"));
        todos == meuStorage[i] ? meuStorage[i] : false;
      }
    }
  } else {
    todos = listaRest.filter(
      (local) => local.bairro.toUpperCase() == verificaBairro
    );
  }

  //percorrendo todos os restaurantes e escrevendo dentro do html
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
                        <button id="${rest.nome}" type="button" class="favorito">Favoritar</buttton>`;
    restaurante.appendChild(li);
  }

  //pegando classe do botao de favoritar -> percorre e identifica o restaurante pelo id para salvar na aba de favoritos
  const classFav = document.getElementsByClassName("favorito");

  for (let botao of classFav) {
    botao.onclick = (e) => {
      addItem(e.target.id, listaRest);
    };
  }
}

//botao favoritar restaurante p/ usar o storage
let arr = [];

function addItem(element, listaRest) {
  localStorage.setItem("restFavoritos", arr);

  //mudando propriedade favoritos p/ 'sim'
  for (let x of listaRest) {
    if (element == x.nome) {
      //pegando o id do elemento clicado
      let listinha = document.getElementById(element);

      //mudando propriedade 'favorito' no array de obj listaRest
      x.favorito = "sim";

      //array de favs no storage
      arr.push(listinha.outerHTML);
      localStorage.restFavoritos = JSON.stringify(arr);
    }
  }

  Swal.fire({
    icon: "success",
    title: "Favoritado",
    text: "Seu restaurante foi favoritado com sucesso!",
    button: false,
    timer: 1500,
  });
}
