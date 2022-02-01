//una funcion siempre devuelve algo
//primero se carga todos los function y despues ejecuta el codigo. No importa donde se coloquen las function
//el scope de una funcion, todo lo que se define dentro de la funcion es de alcance local
//parametro es una variable local que recibe una funcion
//un argumento es un valor que se asgina de una parametro cuando se asigna una funcion

sayHello('Homero', 10) //homero y 10 es el argumento

function sayHello(param1, param2) { //parametro en este caso es any
    let message = 'Hola como estas?'
    console.log(param1 + ' - ' + param2)
}