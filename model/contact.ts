import { Schema, model } from 'mongoose'
let ContactSchema:any

ContactSchema = new Schema({
    name_full: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    data: { type: Date, required: true },
    content: { type: String, required: true}
})

ContactSchema.set('toJSON', {
    transform:(document:any, returnedObject:any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = model('contactSchema', ContactSchema)