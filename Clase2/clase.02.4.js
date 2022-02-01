var x = 10 //al usar var tiene alcance global. Si se usa una funcion con el mismo nombre hay problemas con var
console.log('Se declara x y vale: ' + x)

{
    var x = 'Hola' //let me permite hacer la redeclaracion dentro del bloque
    console.log('Se redeclara x dentro del bloque y vale: ' + x)
}
console.log('Fuera del cloque x vale: ' + x)