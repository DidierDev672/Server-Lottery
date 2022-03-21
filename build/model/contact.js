"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let ContactSchema;
ContactSchema = new mongoose_1.Schema({
    name_full: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    data: { type: Date, required: true },
    content: { type: String, required: true }
});
ContactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
module.exports = (0, mongoose_1.model)('contactSchema', ContactSchema);
