//Node
//En node todas las variables son locales por defecto
//CommonJS define el estandar en node.
//Core Modules, Local Modules, Third Party Modules

exports.log = {
    console: function(msg){
    console.log(msg)
},
    file: function(msg) {
        // aqui hariamos el log en un archivo.
    }
}

var module = require('nombre del modulo')
