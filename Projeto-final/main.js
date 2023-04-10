//acessar arquivo com extensão 'live server' do VSCODE

//acessando html
const novoEvento = document.getElementById("novoEvent");
const inputBairro = document.getElementById("busca");
const filtrosgeral = document.querySelectorAll(".nomeref");

//filtros
let filtro = "";

//loading div loading -> class show/hidden

//armazenando os objetos em arrays
const geral = fetch("restaurantes.json")
  .then((resp) => resp.json())
  .then((listaRest) => {
    console.log("teste");
    filtrosgeral.forEach((element) => {
      element.onclick = (e) => {
        console.log(e);
        //condicional acesso a um obj
        filtro = e?.target?.id;
        console.log(filtro);
        mostraRestaurante(listaRest);
      };
    });
    novoEvento.addEventListener("submit", (e) =>
      salvarNovoEvento(e, listaRest)
    );
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
      : alert("Bairro não cadastrado!");
  } else {
    alert("Campo não preenchido!");
  }
  return "";
}

//evento de evitar redirecionar para outra pagina
function salvarNovoEvento(e, listaRest) {
  e.preventDefault();
  //let bairro = inputBairro.value;
  mostraRestaurante(listaRest);
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
  const classFav = document.getElementsByClassName("favorito");
  console.log(classFav);

  for (let botao of classFav) {
    botao.onclick = (e) => {
      addItem(e.target.id, listaRest);
    };
  }
}

//botao favoritar restaurante p/ usar o storage
let arr = [];
function addItem(element, listaRest) {
  console.log(element);
  localStorage.setItem("restFavoritos", arr);

  //mudando propriedade favoritos p/ 'sim'
  for (let x of listaRest) {
    if (element == x.nome) {
      //pegando o id do elemento clicado
      let listinha = document.getElementById(element);
      console.log(listinha);

      //mudando propriedade 'favorito' no array de obj listaRest
      x.favorito = "sim";
      console.log(x);

      //array de favs no storage
      arr.push(listinha.outerHTML);
      localStorage.restFavoritos = JSON.stringify(arr);
      console.log(localStorage.restFavoritos);
    }
  }

  swal({
    position: "top-end",
    icon: "success",
    title: "Favoritado",
    text: "Seu restaurante foi favoritado com sucesso!",
    button: false,
    timer: 1500,
  });
}
