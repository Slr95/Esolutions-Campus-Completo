//let car = 'Fiat'

const car = { //definicion literal de un objeto
    type:'Fiat', //un objeto debe ser const para no perder la referencia
    model:'600', 
    color:'blanco',
    for: 1,
    if: 'pepe',
    'driver name':'Marcelo',

    fullName: function() {
        return this.type + ' ' +this.model
    }
} 

//const person = new Object() se puede declarar objetos de esta forma tambien

//const object = Object.create(null)

//car['driver name']

//const car = {}
//car.color = 'blanco'


console.log(car) 

//console.log(car['type']) 