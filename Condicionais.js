//ideia: tipos de dieta
// onivora; carnivora; vegetariana; vegana;
// receber true ou false e retornar alerta com 
// a dieta correspondente as opções

alert ('Responda as seguintes perguntas com true ou false, sendo true = sim e false = não')
let carne = prompt ('Você come carne? ')
let ovo = prompt ('Você come ovo? ')
let leite = prompt ('Você ingere leite ou derivados? ')
let frutasVeg = prompt ('Você come frutas e vegetais? ')

//condicional

if ((carne && ovo && leite && veg) || (carne) == true){
    alert ('Sua dieta é onivora')
}