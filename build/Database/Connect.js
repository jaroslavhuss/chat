"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class dbConnect {
    connect() {
        return new Promise((res, rej) => {
            mongoose_1.default.connect("mongodb://127.0.0.1:27017/chat", {
                //@ts-ignore
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }, (err) => {
                console.log(err);
                if (err) {
                    res(false);
                    rej(false);
                }
                else {
                    res(true);
                }
            });
        });
    }
}
exports.default = new dbConnect();
//# sourceMappingURL=Connect.js.map