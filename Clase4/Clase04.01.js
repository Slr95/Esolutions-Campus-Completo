//Los valores no tienen ni propiedades ni metodos por eso no se consideran objetos como tal(boolean, undefined, etc.)
// {} definen objetos pero [] definen un array

const person = {
    firstName: 'Homero',
    lastName: 'Simpson',
    age: 55,
    pets: [ //se pueden hacer objetos dentro de objetos
        {name: 'Ayudante de Santa', toys: ['pelota', 'hueso']},
        {name: 'Bola de nieve', toys: ['pelota', 'ratoncito']},
    ],
    fullName: function() {
        return this.firstName + ' ' + this.lastName  //se utiliza this para acceder a las propiedades de este objeto
    },

    get getFirstName() {
        return this.firstName.toUpperCase()
    },

    /**
     * @param {number} age
     */
    set setAge(age) {
        this.age = age
    }
}

const o = {
    counter: 0
}

Object.defineProperty(o, 'reset', {
    get: function() {
        this.counter = 0
    }
})

Object.defineProperty(o, 'increment', {
    get: function() {
        this.counter++
    }
})

console.log(o)

o.increment

console.log(o)

o.reset

console.log(o)

//Object se refiere a la clase, object se refiere a la instancia

//console.log(person.fullName()) //este se trata como funcion
//console.log(person.getFirstName) //este como propiedad

//person.setAge = 50 

//console.log(person.age)

//console.log(JSON.stringify(new Date()))

//const arr = ['Libro', 'Lapiz', 'Goma']
//console.log(JSON.stringify(arr))

//console.log(Object.values(person))
//console.log(JSON.stringify(person)) para que muestre un json

//si se trata de tipos de datos primitivos, recomiendo dejarlos asi y no convertirlos en objetos

//const message = 'Este es un mensaje'
//message.toUpperCase()

//const str = new String()
//str.toUpperCase()

//person.fullName()

//for(let i in person.pets) {
//    let n = person.pets[i].name + ' juega con '
//    for(let j in person.pets[i].toys) {
//        n += person.pets[i].toys[j] + ' ' 
//    }
//    console.log(n)
//}

//console.log(person.pets.pet1) //de esta forma accedo al objeto
//console.log(person.pets['pet1'])
//console.log(person['pets']['pet1'])

//const person2 = person //si cambiamos algo en la referencia el mismo objeto cambia

//person2.firstName = 'Bart'

//console.log(person)

//person['firstName']

//const prop = 'firstName'
//person[prop]

//hay que evitar o estar convencido al usar delete. Por que se pueden eliminar objetos propios de un programa

//for(let key in person) { //con for(in) se puede recorrer el objeto, evaluar, modificar, etc.
//    console.log(person[key])
//}





