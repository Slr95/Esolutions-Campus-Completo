sayHello('Hola', 'Marcelo')

function sayHello(param1 = 'Hola', param2 = 'Persona') {
    var message = 'Hola como estas?'
    console.log(param1 + ' - ' + param2)
}

//function sum(a, b) {
//    return a + b
//}

//let result = sum (1, 3)

let sayHello2 = function() { //se asigna a una variable una funcion
    console.log("Hola")
}

console.log(sayHello2) //como tarea averiguar como hacer que funcione esto ultimo

let sayHello3 = () => 'alguna cosa'

//return es obligatorio cuando uso llaves {}

let sum = (a, b, c) => a + b + b

setTimeout(() => {
    console.log('funcion anonima')
}, 1000)