class User {
    constructor(name) {
        this.name = name
    }

    static staticMethod() {
        console.log('Metodo estatico')
    }

    sayHi() {
        console.log(`Hola soy ${this.name}`)
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value //_ indica que el atributo es protegido. Cuando es protegido no puedo cambiar el valor a menos que tenga un accesor
    }
}

class Article {

    constructor(title, date, publisher = 'Mi editorial') {
        this.title = title
        this.date = date
        this.publisher = publisher
    }

    static compare(article1, article2) {
        return article1.date - article2.date
    }
}

const articles = [
    new Article('COVID', new Date(2020, 4, 10)),
    new Article('Teletrabajo', new Date(2019, 5, 15)),
    new Article('Zoom', new Date(2018, 11, 1), 'Otra editorial')
]

articles.sort(Article.compare)

console.log(articles)