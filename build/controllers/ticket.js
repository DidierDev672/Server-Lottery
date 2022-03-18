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
const Ticket = require('../model/ticket');
const ticketRouter = express_1.default.Router();
ticketRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const ticket = new Ticket({
        Uid: body.Uid,
        quantityTicket: body.quantityTicket,
        date: new Date()
    });
    const savedTicket = yield ticket.save();
    res.json(savedTicket.toJSON());
}));
ticketRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Ticket.find({})
        .then((tickets) => {
        res.json(tickets);
    })
        .catch((error) => {
        console.error(error);
    });
}));
ticketRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Ticket.findById(id)
        .then((tickets) => {
        if (tickets) {
            return res.json(tickets);
        }
        else {
            res.status(404).end();
        }
    })
        .catch((error) => {
        console.error(error);
    });
}));
ticketRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Ticket.findByIdAndDelete(id)
        .then(() => {
        res.status(204).end();
    })
        .catch((error) => {
        console.error(error);
    });
}));
ticketRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Ticket.findByIdAndDelete(id, { new: true })
        .then((tickets) => {
        res.json((tickets));
        res.status(204).end();
    })
        .catch((error) => {
        console.error(error);
    });
}));
module.exports = ticketRouter;
