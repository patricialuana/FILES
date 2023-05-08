// == compara se os valores são IGUAIS ex: 23 é igual a 23 ou 24 é diferente de 23 ---> NUNCA USAR ESSE
// === verifica se os tipos de dados são IGUAIS ex: "23" e 23 string é diferente de number--> USAR SEMPRE ESSE
// EXEMPLO:

const myPerson = "Patricia"
const myPersonTwo = "Saulo"
console.log (myPerson===myPersonTwo) //usar sempre esse

// != SÃO DIFERENTES???? - ele compara o valor mas não compara o tipo do valor ---> NUNCA USAR ESSE
// !== SÃO TOTALMENTE DIFERENTES???? ele verifica o tipo de dado ---> USAR SEMPRE ESSE
// EXEMPLO:

const myPersonThree = "Gael"
const myPersonFour = "Gael05"
console.log (myPersonThree!==myPersonFour) // usar sempre esse

/*
>      MAIOR
>=     MAIOR OU IGUAL
<      MENOR
<=     MENOR OU IGUAL
EXEMPLO: */

const myNumber = 10
const myNumberTwo = 20
console.log (myNumber > myNumberTwo)