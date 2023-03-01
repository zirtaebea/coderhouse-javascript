
const listanomes = [];
let   quantidade = 5;
//Utilizo do...while para carregar nomes no array por prompt()
do{
   let entrada = prompt("Inserir nome");
   listanomes.push(entrada.toUpperCase());
   console.log(listanomes.length);
}while(listanomes.length != quantidade)
//Concatenamos um novo array de dois elementos
const novaLista = listanomes.concat(["ANA","EMA"]);
//Saída com salto de linha usando join
alert(novaLista.join("\n"));