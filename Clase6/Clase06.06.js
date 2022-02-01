const user = {
    name: 'Homero',
    age: 55
}

const {name, age} = user 

console.log(name, age)

const arr = ['Homero', 'Simpson', 55]
const user = {...arr}
console.log(user)


//clonar objetos
const user = {
    name: 'Homero',
    lastName: 'Simpson',
    age: 55
}

const role = {
    isAdmin: false
}

const clone = Object.assign({a: 1, b: 2}, user, role)

console.log(clone)