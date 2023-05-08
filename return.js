function sum (number1, number2) {
    const result = number1 + number2
    return result 
}
const firstNumber = 10
const secondNumber = 20
console.log (`O primeiro número é ${firstNumber}`)
console.log (`O segundo número é ${secondNumber}`)
console.log (`A soma dos dois é ${sum(firstNumber, secondNumber)}`)

// toda função retorna alguma coisa
// função sem return é VOID, função VAZIA
// QUALQUER VALOR QUE EU DEFINIR NO RETURN É O QUE VAI RETORNAR 
// nesse caso eu quis um resultado, mas poderia ser banana no return, que iria retornar banana
// chegou  no return o js para de excutar, não consigo colocar nada abaixo do return