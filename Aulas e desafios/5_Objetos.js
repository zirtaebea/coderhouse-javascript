/* const usuario = {
    username: "beas",
    password: "senha3"

}

function usuarioC(username,password){
    this.username = username
    this.password = password
}

function usuarioCC(usuario){
    this.username = usuario.username;
    this.password = usuario.password;
    this.printUsername=function(){console.log("username: "+usuario.username)}
}

console.log(usuario)
console.log(new usuarioC("bia", "lalala"))
let nome = prompt("digite username")
let senha = prompt("digite a senha")
const user = new usuarioCC({username: nome, password: senha})
console.log(user)
user.printUsername() */

let username = prompt('digite seu username')
let password = prompt('digite sua senha')

class user{
    constructor(username, password){
        this.username = username
        this.password = password
    }
    printUsername(){
        console.log(this.username)
    }
    login(){
        if(this.username == "admin" && this.password == "123"){
            console.log("login com sucesso");
    
        } else{
            console.log("usuario e senhas invalidos")
        }
    }

}


let user1 = new user (username, password)
console.log(user1)
user1.printUsername()
user1.login()

/*metodo que traz as informações do usuario
function user(username, password){
    this.username = username
    this.password = password
    this.printUser = function(){
        console.log(this.username) //imprima ESTE USUARIO
    }
    this.login = function(){
        if(this.username == "admin" && this.password == "123"){
            console.log("login com sucesso")
    
        } else{
            console.log("usuario e senhas invalidos")
        }
    }
}

let user1 = new user (username, password)
console.log(user1)
user1.printUser()
user1.login()

a função podemos chamar em qualquer lugar
o metodo vc precisa de uma variavel variavel.metodo()
a variavel vai chamar o método
tipo string é um objeto


*/