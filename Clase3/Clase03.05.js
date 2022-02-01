//argument: es un array de tipo object. Se usa para pasar parametros variados

function selectFirst() {
    console.log('El primer elemento es: ' + arguments[0])
}

selectFirst('A', 'B', 'C')

let firstElement = () => {
    console.log('El primer elemento es: ' + arguments[0])
}

firstElement('A', 'B', 'C')
