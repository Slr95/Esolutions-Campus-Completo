//Crear un FormatError que herede SyntaxError, admita message, name y stack

const errorMsg = {
    'error de formato' : 'invalid format'
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(message)
        this.name = 'FormatError'
    }
}

let err = new FormatError(errorMsg["error de formato"]) //hardcodear es una mala practica

console.log(err.name)
console.log(err.message)
console.log(err.stack)

console.log(err instanceof SyntaxError)
