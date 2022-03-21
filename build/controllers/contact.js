"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Contact = require('../model/contact');
const CantactRouter = express_1.default.Router();
CantactRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const contact = new Contact({
        name_full: body.name_full,
        phone: body.phone,
        email: body.email,
        content: body.content,
        data: new Date()
    });
    const savedContact = yield contact.save();
    res.json(savedContact.toJSON());
}));
CantactRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Contact.find({})
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        console.error(error);
    });
}));
CantactRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Contact.findById(id)
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        console.error(error);
    });
}));
CantactRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Contact.findByIdAndDelete(id, { new: true })
        .then((result) => {
        res.json((result));
        res.status(204).end();
    })
        .catch((error) => {
        console.error(error);
    });
}));
module.exports = CantactRouter;
