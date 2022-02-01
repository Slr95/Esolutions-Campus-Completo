//Mapa

let map = new Map([
    ['Homero', 55],  //la key es homero y 55 el valor
    ['Bart', 12],
    ['Lisa', 13]
])

//map.set('Maggie', 3)

//map.clear()

//map.delete('Homero')

map.forEach(function(value, key) { //foreach primero value y despues la clave en map
    console.log(`La clave es ${key} y el valor es ${value}`)
})

//const it = map.entries()
//for(const val of it) {
//    console.log(`La clave es ${val[0]} y el valor es ${val[1]}`)
//}

const it = map.values()
for(const val of it) {
    console.log(val)
}

const it2 = map.keys()
for(const val of it2) {
    console.log(val)
}

map.size

//console.log(map)