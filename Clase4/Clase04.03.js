//Iteracion

listOfNumbers = {}

listOfNumbers[Symbol.iterator] = function() { //ahora listofnumber es un objeto iterable
    let n = 0
    let done = false
    return {
        next: function() {
            n += 10
            if (n == 100) {
                done = true 
            }
            return {value: n, done: done}
        }
    }
}

for(const num of listOfNumbers)  {
    console.log(num)
}

//const n = listOfNumbers()
//console.log(n.next().value)
//console.log(n.next().done)
//console.log(n.next())

let iterator = listOfNumbers[Symbol.iterator]()

while(true) {
    const result = iterator.next()
    if(result.done) {
        break
    }
    console.log(result.value)
}