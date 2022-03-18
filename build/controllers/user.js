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
const User = require('../model/user');
const bcrypt = require('bcrypt');
const userRouter = express_1.default.Router();
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const saltRounds = 10;
    const passwordHash = yield bcrypt.hash(body.password, saltRounds);
    const user = new User({
        name: body.name,
        phone: body.phone,
        city: body.city,
        address: body.address,
        email: body.email,
        password: passwordHash
    });
    const savedUser = yield user.save();
    res.json(savedUser.toJSON());
}));
module.exports = userRouter;
