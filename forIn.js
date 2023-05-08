const students = {
    name:"caio",
    age: 26,
    genre: "male",
}

for(let property in students){
    console.log(`${property} : ${students[property]}`)
}