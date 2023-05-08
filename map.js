// exemplo 1 retornar um array identico e um multiplicado por 2
const numbers = [1,2,3,4]

const newArray = numbers.map( (number) => {
    return number * 2                            // devo falar pro js o que eu quero retornar usando o return
})
console.log(numbers)
console.log(newArray)
// retorna (return) a mesma quantidade de itens porém mutiplicado por 2 os valores alteram

//exemplo 2 adicionar sobrenome da silva e diminuir 5 anos em todos os itens
const students = [
    { name: "Patricia", age: 33 }, // objeto
    { name: "maria", age: 33 },
    { name: "joao", age: 33 },
    { name: "bruno", age: 33 },
    { name: "carla", age: 33 },
    { name: "ana", age: 33 },
    { name: "julio", age: 33 },
];
const newStudents = students.map( (student) => { // criei um novo objeto
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }
    return newStudent
})
console.log(newStudents)