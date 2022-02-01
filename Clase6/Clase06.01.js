//manejo de errores

try {
    console.log('Inicia el bloque try')
    x
    console.log('Termina el bloque try')

} catch (err) {
    console.log('Ocurrio un error en el bloque try: ')
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}

console.log('Continua con la ejecucion del script')