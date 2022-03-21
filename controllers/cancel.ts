import Router from 'express'
const  cancelTicket  = require('../model/cancel')

const ticketCancel = Router.Router()

ticketCancel.post('/', async (req, res) => {
    const body = req.body

    const cancel = new cancelTicket({
        Uid: body.Uid,
        IdTicket: body.IdTicket,
        content: body.content,
        data: new Date()
    })

    const savedCancel = await cancel.save()
    res.json(savedCancel.toJSON())
})

ticketCancel.get('/', async(req, res) => {
    await cancelTicket.find({})
    .then((result: JSON) => {
        res.json(result)
    })
    .catch((error:any) => {
        console.error(error)
    })
})

ticketCancel.get('/:id', async (req, res) => {
    const { id } =  req.params

    await cancelTicket.findById(id)
    .then((result:JSON) => {
        if(result){
            return res.json(result)
        }else{
            res.status(404).end()
        }
    })
})

ticketCancel.delete('/:id', async(req, res) => {
    const { id } = req.params
    
    await cancelTicket.findByIdAndDelete(id, {new: true})
    .then((cancel:JSON) => {
        res.json((cancel))
        res.status(204).end()
    })
    .catch((error:any) => {
        console.error(error)
    })
})

module.exports = ticketCancel