//funciones callback se pasan como argumento a otra funcion que la recibe como un parametro

function showAccept() {
    console.log('Accepted')
}

function showCancel() {
    console.log('Canceled')
}

//function process(question, yes, no) {
//    if(confirm(question)) { //lanza un modal de confirmacion
//        yes()
//    } else {
//        no()
//    }
//}

function process(question, yes, no) {
    confirm(question) ? yes() : no() //tambien se puede usar un ternario
}

process('Are you sure?', showAccept, showAccept)