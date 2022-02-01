//Async away
//Funciona igual que una promesa
//async y await funcionan juntas para trabajar como una promesa

async function func() { 
    await new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Ocurrio un error')), 1000)
    })
}

func()
.then(value => console.log(value))
.catch(reason => console.log(reason))

async function func() {

let results = await Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 000)
    }),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000)
    }),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000)
    })
])

console.log('En el cuerpo de la funcion...')

return results
}

func().then(value => console.log(value))

console.log('sigue la ejecucion del script...')