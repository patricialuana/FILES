// arrow function =>
// a arrow function é resumida: essa primeira parte do código:

//const sum = function (number1, number2) {
//    const result = number1 + number2
//    return result 
//   }
// ficaria assim, sem return:
// const sum = (number1, number2) => number1 + number2

// quando uso chaves {} tenho que colocar o return, exemplo:
// const sum = (number1, number2) => {
//        return number1 + number2
//        }

// arrow function sem parametros fica com o parenteses sem nada ():
// const sum = () => {
//        return number1 + number2
//        }

// arrow function com 1 parametros fica sem o parenteses:
// const sum = number1 => {
//        return number1 + number2
//        }

const sum = function (number1, number2) {
    const result = number1 + number2
    return result 
}
const firstNumber = 10
const secondNumber = 20
console.log (`O primeiro número é ${firstNumber}`)
console.log (`O segundo número é ${secondNumber}`)
console.log (`A soma dos dois é ${sum(firstNumber, secondNumber)}`)
