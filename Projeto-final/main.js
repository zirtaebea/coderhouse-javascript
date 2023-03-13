//armazenando os objetos em arrays
const cafe = [
  { id: 1, nome: "Bolo da Luz", preco: 1, avaliacaoUsuario: 4 },
  { id: 1, nome: "Casa de Noca", preco: 3, avaliacaoUsuario: 4 },
  { id: 1, nome: "Santo Pão Gourmet", preco: 3, avaliacaoUsuario: 5 },
  { id: 2, nome: "Padoca do Carmo", preco: 1, avaliacaoUsuario: 3 },
  { id: 2, nome: "Pousada des Artes", preco: 2, avaliacaoUsuario: 5 },
  { id: 2, nome: "Cafélier", preco: 3, avaliacaoUsuario: 4 },
];

const almoco = [
  { id: 1, nome: "Bella Gourmet Bistrot", preco: 4, avaliacaoUsuario: 4 },
  { id: 1, nome: "Arabesque Empório Árabe", preco: 2, avaliacaoUsuario: 3 },
  { id: 1, nome: "Restaurante Martim Pescador", preco: 3, avaliacaoUsuario: 4 },
  { id: 2, nome: "Restaurante Pelô Bistrô", preco: 3, avaliacaoUsuario: 3 },
  { id: 2, nome: "Omí Restaurante", preco: 4, avaliacaoUsuario: 4 },
  {
    id: 2,
    nome: "Restaurante Mistura Contorno",
    preco: 5,
    avaliacaoUsuario: 5,
  },
];

const jantar = [
  { id: 1, nome: "La Pasta Gialla", preco: 2, avaliacaoUsuario: 4 },
  { id: 1, nome: "Cantina Buoni Amici", preco: 2, avaliacaoUsuario: 3 },
  { id: 1, nome: "Origem", preco: 5, avaliacaoUsuario: 5 },
  { id: 2, nome: "Bar Ulisses", preco: 2, avaliacaoUsuario: 5 },
  { id: 2, nome: "Poró Restaurante & Bar", preco: 3, avaliacaoUsuario: 4 },
  { id: 2, nome: "Zanzibar", preco: 2, avaliacaoUsuario: 4 },
];

const cafeAlmoco = cafe.concat(almoco);
const geral = cafeAlmoco.concat(jantar);

let filtroCafe = document.getElementById("cafe-da-manha");
filtroCafe.onclick = () => {
  const centroCafe = cafe.filter((idCafe) => idCafe.id == 2);
  const pitubaCafe = cafe.filter((idCafe) => idCafe.id == 1);
  for (let nome of centroCafe) {
    let nomeCentro = nome.nome;
    console.log(nomeCentro);
  }
  for (let nome of pitubaCafe) {
    let nomePituba = nome.nome
    console.log(nomePituba)
  }
};
