//iterador foreach y for

let set = new Set(['a', 'b', 'c'])

set.forEach(function(value) { //foreach usa el iterador de set
    console.log(`El valor del elemento es ${value}`)
})

const it = set.entries()
for(const val of it) {
    console.log(`El valor del elemento es ${val}`)
}

console.log(set.size)