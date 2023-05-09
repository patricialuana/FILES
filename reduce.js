const list = [1,2,3,4]

const sum = list.reduce ((acc, current) => {
    return acc + current
}, 0)

console.log(sum)

// reduce vai reduzir o array, o acc é o acumulador que teve valor inicial 0
// o current vai pegar o valor acumulado e somar ao valor 1, depois vai pegar o valor 1 (que é o acumulado)
// e somar ao valor 2, e assim sucessivamente.
// o valor inicial pode ser qualquer valor
// pode ser soma, divisão, multiplicação...