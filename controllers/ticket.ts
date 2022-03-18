import Router  from'express'
const Ticket = require('../model/ticket')

const ticketRouter = Router.Router()

ticketRouter.post('/', async (req, res) => {
    const body = req.body

    const ticket = new Ticket({
        Uid: body.Uid,
        quantityTicket: body.quantityTicket,
        date: new Date()
    })

    const savedTicket = await ticket.save()
    res.json(savedTicket.toJSON())
})

ticketRouter.get('/', async (req, res) => {
    await Ticket.find({})
    .then((tickets: JSON) => {
        res.json(tickets)
    })
    .catch((error: any) => {
        console.error(error)
    })
})

ticketRouter.get('/:id', async(req, res) => {
    const { id } = req.params

    await Ticket.findById(id)
    .then((tickets:JSON) => {
        if(tickets){
            return res.json(tickets)
        }else{
            res.status(404).end()
        }
    })
    .catch((error:any) => {
        console.error(error)
    })
})

ticketRouter.delete('/:id', async(req, res) => {
    const { id } = req.params

    await Ticket.findByIdAndDelete(id)
    .then(() => {
        res.status(204).end()
    })
    .catch((error:any) => {
        console.error(error)
    })
})

ticketRouter.delete('/:id', async(req, res) => {
    const { id } = req.params

    await Ticket.findByIdAndDelete(id, {new: true})
    .then((tickets:JSON) =>{
        res.json((tickets))
        res.status(204).end()
    })
    .catch((error:any) => {
        console.error(error)
    })
})

module.exports = ticketRouter