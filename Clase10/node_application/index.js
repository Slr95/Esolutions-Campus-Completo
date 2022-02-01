const colors = require('colors')

const choosenColor = colors.getRandomColor()

console.log(`Si usa el color ${choosenColor.name}, en su sitio web deberia usar el codigo ${choosenColor.code}`)

const favoriteColor = colors.getRed()

console.log(`Mi color favorito es el ${favoriteColor.name} por que su codigo de color es ${favoriteColor.code}`)