//inventar un objeto array que permita push y pop. 
//comparar profundamente 2 objetos
//el desafio es ver que esto funcione comparando objetos y no referencias
//1º desafio crear un objeto que tenga metodos para hacer push y pop. 

const obj1 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

const obj2 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

let obj3 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

console.log(8 == '8')
console.log(8 === '8')

let obj3 = obj1

console.log(obj1 == obj2) //da false por que tienen distinta referencia
console.log(obj1 === obj2)

//1

myArray = {

}

myArray.push('a')