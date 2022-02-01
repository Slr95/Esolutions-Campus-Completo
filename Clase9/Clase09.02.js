var http = require('http') //La funcion require devuelve un objeto http

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('SERVIDOR ACTIVO')
    res.end()
})

server.listen(5000)