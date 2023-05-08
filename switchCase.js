const temperature = 30

switch (temperature) {
    case 30:
        console.log('A pessoa está com a temperatura muito baixa')
        break;

    case 33:
        console.log('A pessoa está com a temperatura baixa')
        break;

    case 36:
        console.log('A pessoa está com a temperatura normal')
        break;

    default:
        console.log('temperatura não encontrada')
        break;
}