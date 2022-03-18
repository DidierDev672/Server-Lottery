const { Schema, model } = require('mongoose')
let ticketSchema:any

ticketSchema = new Schema({
    Uid: { type: String },
    quantityTicket: { type: String },
    date: { type: Date }
}) 

ticketSchema.set('toJSON', {
    transform: (document:any, returnedObject:any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = model('ticket', ticketSchema)