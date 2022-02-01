//Fetch

if(window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
    try {
        request = new ActiveXObject('M....')
    } catch(error) {
        try {
        request = new ActiveXObject('M....')   
        } catch(error) {
            console.log('No esta soportado')
        }
    }
}

request.open('GET', 'url', true)
request.send(null)

//todo lo anterior se ha resuelto actualmente con la api fetch

fetch('http...')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Ocurrio un error' + err))

function getParameterValue(param) {
    
}