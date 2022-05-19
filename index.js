

let test =[{
    id: 1,
    nome:"Teste",
    morada:"Maputo",
    saldo:10
},
{
    id: 2,
    nome:"Teste",
    morada:"Maputo",
    saldo:50
}]

var total = 
test.reduce((accumulator, current) => accumulator + current.saldo, 0);


console.log(total)
