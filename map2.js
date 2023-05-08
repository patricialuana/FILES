const numbers = [1,2,3,4]
const double = number => number * 2
const sum = number => number + 10

const newArray2 = numbers.map(double).map(sum)

console.log(newArray2)