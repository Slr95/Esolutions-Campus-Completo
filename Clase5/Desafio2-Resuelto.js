//Desafio 2 resuelto

const person1 = {
    name: 'Homero',
    data: {
        age: 55,
        address: 'Avenida Siempreviva'
    }
}

const person2 = {
    name: 'Homero',
    data: {
        age: 55,
        address: 'Avenida Siempreviva'
    },
}

console.log(compareObjects(person1, person2))

function compareObjects(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length != keys2.length) {
        return false
    }

    for (const key of keys1) {
        const value1 = object1[key]
        const value2 = object2[key]
        if(value1 != null && value2 != null 
            && typeof value1 == 'object' && typeof value2 == 'object') {
            if(!compareObjects(value1, value2)) {
                return false
            }
        } else {
            if(value1 !== value2) {
                return false        
            }
        }
    }
    return true
}