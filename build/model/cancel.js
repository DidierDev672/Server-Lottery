"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schemaCancel;
schemaCancel = new mongoose_1.Schema({
    Uid: { type: String, required: true },
    idTicket: { type: String, required: true },
    data: { type: Date, required: true },
    content: { type: String, required: true }
});
schemaCancel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
module.exports = (0, mongoose_1.model)('CancelTicket', schemaCancel);
