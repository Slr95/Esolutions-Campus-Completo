class Question {

    static #score = 0
    #question
    #answer
    #correct

    constructor(question, answers, correct) {
        this.#question = question
        this.#answers = answers
        this.#correct = correct
    }

    display = function() { //muetra las preguntas
        console.log(this.#question)
        for(let i = 0; i < this.#answers.length; i++) {
            console.log((i + 1) + ') ' + this.#answers[i])
        }
    }

    testAnswer = function(value) {
        if(this.#answers[value-1] == this.#correct) {
            return true 
        } else {
            return false
        }
    }

    static addPoint = function() {
        this.#score++
    }

    static displayScore = function(total) {
        console.log(`La puntuacion obtenida es ${this.#score} de ${total}`)
    }

}

let arr = [
    new Question('casa comienza con...', ['a', 'b', 'c', 'd'], 'c'),
    new Question('burro comienza con...', ['a', 'b', 'c', 'd'], 'b'),
    new Question('cosa comienza con...', ['a', 'b', 'c', 'd'], 'c'),
    new Question('agua comienza con...', ['a', 'b', 'c', 'd'], 'a'),
    new Question('dado comienza con...', ['a', 'b', 'c', 'd'], 'd')
]

arr = shuffle(arr)

for(question of arr) {
    question.display()
    let answer = parseInt(prompt('Selecione la respuesta correcta'))
    if(question.testAnswer(answer)) {
        console.log('Bien! :) La respuesta es correcta!')
        Question.addPoint()
    } else {
        console.log('Que pena... :(')
    }
}
Question.displayScore(arr.length)

function shuffle(arr) {
    let currentIndex = arr.length //currentIndex corresponde al ultimo
    let randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex) //Busca una pregunta random
        currentIndex--
        [arr[currentIndex], arr[randomIndex]] = 
            [arr[randomIndex], arr[currentIndex]]
    }
    return arr
}

