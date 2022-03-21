import { Schema, model  } from 'mongoose'
let schemaCancel:any


schemaCancel = new Schema({
    Uid: {type: String, required: true},
    IdTicket: { type: String, required: true },
    data: {type: Date, required: true},
    content: {type: String, required: true}
})

schemaCancel.set('toJSON', {
    transform: (document:any, returnedObject:any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = model('CancelTicket', schemaCancel)