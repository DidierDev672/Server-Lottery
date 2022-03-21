import Router  from 'express'
const Contact  = require('../model/contact')

const CantactRouter = Router.Router()

CantactRouter.post('/', async (req, res) => {
    const body = req.body

    const contact = new Contact({
        name_full: body.name_full,
        phone: body.phone,
        email: body.email,
        content: body.content,
        data: new Date()
    })

    const savedContact = await contact.save()
    res.json(savedContact.toJSON())
})

CantactRouter.get('/', async (req, res) => {
    await Contact.find({})
    .then((result: JSON) => {
        res.json(result)
    })
    .catch((error:any) => {
       console.error(error)
    })
})

CantactRouter.get('/:id', async (req, res) => {
    const { id } = req.params

    await Contact.findById(id)
    .then((result:JSON) => {
        res.json(result)
    })
    .catch((error:any) => {
        console.error(error)
    })
})

CantactRouter.delete('/:id', async (req, res) => {
    const { id } = req.params 

    await Contact.findByIdAndDelete(id, { new:true })
    .then((result:JSON) => {
        res.json((result))
        res.status(204).end()
    })
    .catch((error:any) => {
        console.error(error)
    })
})

module.exports = CantactRouter