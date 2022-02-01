console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'cadena')
console.log(typeof {})
console.log(typeof null)

//let x = 10, y = 20
//x = y //el valor de x se le asigna a y

let arr1 = [1, 2, 3], arr2 = [4, 5, 6]
arr1 = arr2 //en este caso arr1 toma la referencia de arr2

let x = '10' + 5 // el + se toma como operador de concatenacion
console.log(x)

let y = '10' - 5 //en este caso si resta 10 - 5. Convierte el string 10 en un numero y lo resta
console.log(y)

console.log(3 * true) //true se toma como 1 y false se toma como 0
console.log(8 / '2')
console.log(Math.pow('7', '2'))//potencia

console.log(5 == '5')//compara un valor numerico con un string pero lo lleva  number y los dos son 5
console.log(5 === '5')//esto es comparacion estricta, compara el valor y el tipo. En este caso es false

console.log(5 != '5') 
console.log(5 !== '5') //5 no es igual a la cadena de 5 osea es true

console.log("A" < 'Z') //define una comparacion de string en lexicografia.
console.log("Gato" < 'Gota')
console.log("Ta" < 'Taa')

console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean('' || ''))

console.log(Boolean({})) 
console.log(Boolean([]))
console.log(Boolean(' '))
console.log(Boolean('false')) //boolean no convierte el false

console.log(undefined && 'cadena') //devuelve el primer elemento
console.log('hola' && 'cadena') //devuelve el segundo elemento

console.log(undefined || 'cadena')
console.log('hola' || 'cadena')

let result = '9' === 9 ? 'son iguales' : 'son distintos'
console.log(result)

console.log(!!'cadena')
console.log(!!null)

console.log(Boolean('cadena'))
console.log(Boolean(null))