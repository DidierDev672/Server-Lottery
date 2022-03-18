import express from 'express'
import cors from'cors'

const ticketRouter = require('./controllers/ticket')
const userRouter = require('./controllers/user')
const cancelRouter = require('./controllers/cancel')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/ticket', ticketRouter)
app.use('/api/ticket/user', userRouter)
app.use('/api/cancel', cancelRouter)

module.exports = app