let n1 = 'Homero'
let n2 = 'Bart'
let n3 = `Lisa`

console.log(`Hola ${n1}`) //el ` reemplaza algo de una cadena de texto
console.log(`Hola ${n1} tenes ${1 + 5} mensajes.`) 

let symbol = Symbol('Este es un mensaje de texto') //symbol funciona con una especie de tipo de dato. Una vez declarado no se puede cambiar
console.log(symbol)

let arr1 = new Array()
let arr2 = [] //de las 2 formas puedo escribir un array

let animals = ['Perro', 'Gato']
let firstElement = animals[0]
animals[1] = 'Raton'
animals.push('Leon')
animals.pop() //pop quita el ultimo elemento de la lista

//let map = new Map() //map mantiene un conjunto de datos de tipo keyvalue
//map.set(key, value)
//map.get(key)
//map.has(key) //pregunta si existe ese elemento en el mapa
//map.delete(key)
//map.clear //borra el mapa directamente
//map.size

let date = new Date()
console.log(date)
