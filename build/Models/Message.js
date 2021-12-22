"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Message = new mongoose_1.Schema({
    name: { type: String },
    time: { type: String },
    msg: { type: String },
});
exports.default = mongoose_1.model(`Message`, Message);
//# sourceMappingURL=Message.js.map