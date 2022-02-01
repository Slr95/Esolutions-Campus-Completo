const TicketManager = require('./ticketManager')

const ticketManager = new TicketManager(10)

ticketManager.on('buy', () => {
    console.log('Alguien compro un ticket')
})

ticketManager.once('buy', () => { //para escuchar cuando compra varios tickets
    console.log('Cualquier cosa, una unica vez.')
})

ticketManager.buy('homero@mail.com', 20)
ticketManager.buy('homero@mail.com', 20)
ticketManager.buy('homero@mail.com', 15)
ticketManager.buy('homero@mail.com', 15)