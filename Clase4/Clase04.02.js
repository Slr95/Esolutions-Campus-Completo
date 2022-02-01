//Clases constructoras

class Person {
    constructor(firstName, lastName, age) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.city = 'Springfield',
            this.fullName = function() {
                return this.firstName + ' ' + this.lastName
            }
    }
}

const homero = new Person('Homero', 'Simpson', 55)
const bart = new Person('Bart', 'Simpson', 12)

Person.prototype.otherProperty = 'algo' //prototype agrega otro atributo de afuera y seria replicado hacia todos los objetos

Person.prototype.otherMethod = function () {
    return 'otherMethod'
}

console.log(bart.otherProperty)
console.log(bart.fullName())
console.log(bart.otherMethod())