// exemplo de typeof
const myAge = 33
const myText = "olá, sou uma string"
const myPerson = {
    name: "Pati",
    age: 33,
    adress: "fashfiusaiufhsia"
}

console.log(typeof myPerson) //typeof para mostra de que tipo é o objeto
console.log(typeof myAge)
console.log(typeof myText)


// exemplo de delete
const myData = {
    name: "Pati",
    age: 33,
    adress: "fashfiusaiufhsia"
}
delete myData.age            // delete exclui item de um objeto
console.log(myData)