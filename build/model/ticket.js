"use strict";
const { Schema, model } = require('mongoose');
let ticketSchema;
ticketSchema = new Schema({
    Uid: { type: String },
    quantityTicket: { type: String },
    date: { type: Date }
});
ticketSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
module.exports = model('ticket', ticketSchema);
