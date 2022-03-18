import Router from 'express'
const User = require('../model/user')
const bcrypt = require('bcrypt')

const userRouter = Router.Router()

userRouter.post('/', async (req, res) => {
    const body = req.body
    
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        phone: body.phone,
        city: body.city,
        address: body.address,
        email: body.email,
        password: passwordHash
    })

    const savedUser = await user.save()
    res.json(savedUser.toJSON())
})

module.exports = userRouter