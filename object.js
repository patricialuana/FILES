// todo objeto tem propriedades e valor e devem estar dentro de uma variavel, exemplo:

const myPerson = {
    name: "patricia",
    age: "33",
    height: "1,69",
    address: {                                                // objeto dentro de um objeto
        street: "rua carlos antonio pasquino",
        number: "2321",
        country: "Brasil"

    }
}

console.log(myPerson)
//console.log(myPerson.name.height) assim vai acessar apenas 2 itens do objeto

