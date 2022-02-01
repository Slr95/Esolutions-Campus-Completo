//Tratar de hacer que la funcion loadScript que vimos antes, devuelva una promesa

function loadScript(src, callback) {
    setTimeout(() => {
        let script = document.createElement('script')
        script.src = src

        script.onload = () => callback(null, script)
        script.onerror = () => callback(`new Error(Error en la carga ${src}`)

        document.head.append(script)
    }, 1000)
}

