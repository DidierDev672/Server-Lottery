import { Schema, model  } from 'mongoose'
let userSchema:any

userSchema = new Schema({
    name: { type: String, required: true},
    phone: { type: String, required: true},
    city: { type: String, required: true},
    address: { type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true },
})


userSchema.set('toJSON', {
    transform: (document:any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = model('user', userSchema)