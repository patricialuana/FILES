// ? SE
// : SE NÃO
// EXEMPLO:

const balance = true
const isNotBlocked = true
const accountExist = true
const transferOk = balance && isNotBlocked && accountExist ? 'TRANSFERÊNCIA REALIZADA' : 'TRASFERÊNCIA NEGADA'
console.log(transferOk)