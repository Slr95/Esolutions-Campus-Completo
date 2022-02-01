function add(a, b) { //los nombres de las funciones son verbos en ingles
    let sum = a + b
    console.log(`${a} + ${b} = ${sum}`)
}

function multiply(a, b) { 
    let product = a * b
    console.log(`${a} * ${b} = ${product}`)
}

const arr = [add, multiply] //definir los array como constantes

arr[0](2, 5)

const otherArr = [add(20, 30), multiply(10, 5)]

console.log(arr, otherArr)

//let sum = add 

//sum(100, 20)

//add(30, 40)