"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ticketRouter = require('./controllers/ticket');
const userRouter = require('./controllers/user');
const cancelRouter = require('./controllers/cancel');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/ticket', ticketRouter);
app.use('/api/ticket/user', userRouter);
app.use('/api/cancel', cancelRouter);
module.exports = app;
