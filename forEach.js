const students = [
    { name: "Patricia", age: 33 },
    { name: "maria", age: 33 },
    { name: "joao", age: 33 },
    { name: "bruno", age: 33 },
    { name: "carla", age: 33 },
    { name: "ana", age: 33 },
    { name: "julio", age: 33 },
];
students.forEach( (student, index, array) => { //o valor student sempre vai assumir o valor de um item do array
    console.log(student, index, array)
})