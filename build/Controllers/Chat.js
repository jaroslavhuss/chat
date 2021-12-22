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
exports.Chat = void 0;
const express_1 = require("express");
const Message_1 = __importDefault(require("../Models/Message"));
exports.Chat = express_1.Router();
exports.Chat.post("/get-all-messages", (req, res) => {
    Message_1.default.find({}, (err, docs) => {
        return res.status(200).json(docs);
    })
        .sort({ time: -1 })
        .limit(50);
});
exports.Chat.post("/save-the-message", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, msg, } = req.body;
    if (name && msg) {
        const Mess = new Message_1.default({
            name: name,
            msg: msg,
            time: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
        });
        console.log("Trying to save the shit!");
        Mess.save((err, doc) => {
            if (err) {
            }
            else {
                Message_1.default.find({}, (err, docs) => {
                    res.status(200).json(docs);
                })
                    .sort({ time: -1 })
                    .limit(50);
            }
        });
    }
    else {
        return res.status(400).json({
            data: [],
            errors: "Chybí povinné náležitosti objektu",
        });
    }
}));
//# sourceMappingURL=Chat.js.map