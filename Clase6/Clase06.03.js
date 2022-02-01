console.log('Inicio del script')

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'validationError'
    }
}

try {
    const json = '{"age":55}'
    console.log(readUser(json))
} catch (err) {
    console.log(err.name)
    console.log(err.message)
} finally {
    console.log('Esto se ejecuta siempre')
}

function test() {
    throw new ValidationError('Ay!')
}

try {
    test()
} catch (err) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}