//herencia

class Animal {
    static planet = 'Earth'

    constructor(name) {
        this.name = name
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed
        console.log(`${this.name} corre con una velocidad de ${this.speed}`)
    }
    stop() {
        this.speed = 0
        console.log(`${this.name} se quedo quieto`)
        this.#privateMethod()
    }
    #privateMethod() {
        console.log('Solo la clase animal')
    }
}

class Rabbit extends Animal { //rabbit hereda de animal
    constructor(name, earLength) {
        super(name)
        this.earLength = earLength
    }
    hide() {
        console.log(`${this.name} se escondio`)
    }
    stop() {
        super.stop()
        this.hide()
    }
}

const rabbits = [
    new Rabbit('Conejo blanco', 15),
    new Rabbit('Conejo negro', 20)
]

rabbits.sort(Rabbit.compare)
console.log(Rabbit.planet)

class Dog extends Animal {
    constructor(name, race) {
        super(name)
        this.race
    }
    play() {
        console.log(`${this.name} mueve la cola`)
    }
}

//const rabbit = new Rabbit('Bunny')
rabbit.stop()

//let dog = new Dog('Paco', 'Border Collie')
//dog.play()
//dog.run(10)

//let rabbit = new Rabbit('Bunny', 15)

//console.log(rabbit.name)
//console.log(rabbit.earLength)