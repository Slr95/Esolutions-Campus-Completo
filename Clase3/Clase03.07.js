function makePerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

const homero = makePerson('Homero', 'Simpson', '55')
const bart = makePerson('Bart', 'Simpson', '12')

console.log(homero, bart)