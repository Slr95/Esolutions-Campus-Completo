let User = class Myclass {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`Hola soy ${this.name}`)
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value //_ indica que el atributo es protegido. Cuando es protegido no puedo cambiar el valor a menos que tenga un accesor
    }
}

class Button {
    constructor(value) {
        this.value = value
    }

    click = () => { //cuando usemos clases es importante recordar que tiene que estar definida la funcion como arrow function
        console.log(this.value)
    }
}

const button = new Button('Aceptar')
setTimeout(button.click, 1000)

//const user = new User('Homero')
//user.name = 'Bart'
//user.sayHi()



//let myValor = 12

//function func() {
//    myValor = 23
//}

//func ()

//console.log(myValor)

//console.log(typeof User) //una clase es una funcion

//console.log(User === User.prototype.constructor)

//console.log(User.prototype.sayHi)

//console.log(Object.getOwnPropertyNames(User.prototype))