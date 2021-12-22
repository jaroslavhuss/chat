import { Schema, model } from "mongoose";

const Message = new Schema<{}>({
  name: { type: String },
  time: { type: String },
  msg: { type: String },
});
export default model(`Message`, Message);
