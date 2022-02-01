//Promesas

setTimeout()

function loadScript(src) {
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
}

function loadScript(src) {
    setTimeout(() => {
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
    }, 1000)
}

let promise = new Promise(function(resolve, reject) {
    //Aca escribo el codigo del productor.
    setTimeout(() => resolve('Listo!'), 1000)
})

let promise = new Promise(function(resolve, reject) {
    //Aca escribo el codigo del productor.
    setTimeout(() => reject(new Error('Ay!')), 1000)
})

promise.then(
    function(result) {
        // Maneje el resultado exitoso
    },
    function(error) {
        //Maneje el error
    }
)

let promise = new Promise(function(resolve, reject) {
    //Aca escribo el codigo del productor.
    setTimeout(() => resolve('Listo!'), 1000)
})

promise.then(
    function(result) {
        console.log(result)
    }
)

let promise = new Promise(function(resolve, reject) {
    let rnd = Math.round(Math.random())
    if(rnd) {
        setTimeout(() => resolve('Listo!'), 1000)
    } else {
    //Aca escribo el codigo del productor.
    setTimeout(() => reject('ay!'), 1000)
    }
    })

promise
.then( 
    function(result) {
        console.log('Se resolvio:' + result)
    })
    .catch(
        function(err){
            console.log('Se rechazo:' + err)
    })
    .finally(
        function(){
            console.log('Esto se ejecuta siempre')
    })

//una promesa ejecuta un codigo y puedo una vez ejecutado llamar a resolve con el resultado o llamar el reject con el mensaje de error

