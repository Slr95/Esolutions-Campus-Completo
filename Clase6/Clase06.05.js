//desestructuracion
//args argumentos, rest resto

const [a, b, ...rest] = func()
console.log(a)
console.log(b) //con una coma me salteo un elemento del array, cada coma indica un salteo
console.log(rest)


function func() {
    return new Set([1,2,3,4,5])
}