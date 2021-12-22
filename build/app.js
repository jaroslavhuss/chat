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
const Connect_1 = __importDefault(require("./Database/Connect"));
const Chat_1 = require("./Controllers/Chat");
const App = express_1.default();
App.use(express_1.default.json());
const appPreload = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbConnection = yield Connect_1.default.connect();
    console.log(dbConnection);
    if (dbConnection) {
        console.log("app si fakin connected!");
        App.get("/", (req, res) => {
            res.status(200).send("Cool");
        });
        App.use("/chat/", Chat_1.Chat);
        App.listen(process.env.PORT || 9000, () => {
            console.log("App runs at some shajt!");
        });
    }
    else {
        console.log("Can not connect to the server");
    }
});
appPreload();
//# sourceMappingURL=app.js.map