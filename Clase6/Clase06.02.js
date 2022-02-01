const json = '{"name":"Homero", "age":55}'
//const json = '{"age":55}'
//const json = '{malformado}'

try {
    const json = '{"age":55}'
    processData(json)
} catch (err) {
    console.log(err.name)
    console.log(err.message)
} finally {
    console.log('Esto se ejecuta siempre')
}

console.log('Ejecucion normal')

function processData(json) {
try {
    const user = JSON.parse(json) //parse transforma un json a un objeto
    if(!user.name) {
        throw new SyntaxError('Incomplete data: no name')
    }
    console.log(user.name)
    
} catch (err) {
    if (err instanceof ReferenceError) {
        console.log(err.name)
    } else if (err instanceof SyntaxError) {
        console.log(err.name)
        throw err
    } else {
        throw err
    }
}

//comienza el script

try {
    //bloques vitales: es un bloque en el que un proceso comienza y termina ahi
} catch (err) {
    
}
//otro pedazo de js
try {
    //bloques vitales
} catch (err) {
    
}

//otro pedazo de js

try {
    //bloques vitales
} catch (err) {
    
}
}

<script>
    window.onerror = function(message, url, col, line, error) {
        alert()
    }
</script>


//En el finally solo se usa para terminar

//todos los errores son capturados por el bloque catch y nosotros tenemos la obligacion de manejar los errores pero cuando no sabemos lo tenemos que relanzar