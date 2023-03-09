function atribuirOperacao(op) {
    if (op == "somar") {
        return (a, b) => a + b
    } else if (op == "subtrair") {
        return (a, b) => a - b
    }
}

let soma = atribuirOperacao("somar")
let subtracao = atribuirOperacao("subtrair")

console.log( soma(4, 6) )  //  10
console.log( subtracao(5, 3) )  //  2