const EventEmitter = require('events')

class TicketManager extends EventEmitter {
    constructor(supply) {
        super() //siempre que se extiende una clase hay que hacer un super
        this.supply = supply
    }

    buy(email, price) {
        if (this.supply > 0) {
        this.supply--
        this.emit('buy', email, price, Date.now())
        return
        }
        this.emit('error', new Error('No hay mas'))
    }
}

module.exports = TicketManager