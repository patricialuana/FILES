const temperature = 40

if(temperature >= 36 && temperature <= 39){
    console.log('A pessoa está saudável')
} else if(temperature > 39){
    console.log('A pessoa está com febre')
} else {
    console.log('A pessoa está com a temperatura baixa, procure um medico')
}