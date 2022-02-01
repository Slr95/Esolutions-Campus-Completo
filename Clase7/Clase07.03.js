//Encadenamiento de promesas

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000)
}).then(function(result) {
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 2
})

//lo de arriba es como hacer new Promise().then().then().then() 

let promise = new Promise( function(resolve, reject) {
    setTimeout(() => resolve(1), 1000)
})

promise.then(function(result) {
    console.log(result)
    return result * 2
})

promise.then(function(result) {
    console.log(result)
    return result * 2
})

promise.then(function(result) {
    console.log(result)
    return result * 2
})

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000)
}).then(function(result) {
    console.log(result)
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(result * 2), 1000)
    })
}).then(function(result) {
    console.log(result)
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(result * 2), 1000)
    })
}).then(function(result) {
    console.log(result)
})

new Promise((resolve, reject) => {
    throw new Error('Ay!')
}).catch(err => console.log(err.message))

new Promise((resolve, reject) => { //cuando pensamos en promesas pensar en resolve(resultado) y reject(error)
    try {
        //Aqui escribo el cuerpo del manejador
        throw new SyntaxError('Error de sintaxis')
        resolve('ok')
    } catch (err) {
        reject(err)
    } 
})
.then(result => console.log(result))
.catch(err => console.log(err.message))

function loadScript(src, callback) {
    return new Promise(function(resolve, reject) {
    setTimeout(() => {
    let script = document.createElement('script')
    script.src = src

    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`Error en la carga ${src}`), script)

    document.head.append(script)
    }, 1000)
})
}

//loadScript('script1.js')
//  .then(script => loadScript('script2.js'))
//  .then(script => loadScript('script3.js'))
//  .then(script => {
//      firstFunction()
//      secondFunction()
//      thirdFunction()
// })
//  .catch(err => console.log(err))