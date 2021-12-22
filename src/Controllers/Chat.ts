import { Router, Request, Response } from "express";
import Message from "../Models/Message";
export const Chat = Router();
Chat.post("/get-all-messages", (req: Request, res: Response) => {
  Message.find({}, (err, docs) => {
    return res.status(200).json(docs);
  })
    .sort({ time: -1 })
    .limit(50);
});
Chat.post("/save-the-message", async (req: Request, res: Response) => {
  const {
    name,
    msg,
  }: {
    name: string;
    msg: string;
  } = req.body;
  if (name && msg) {
    const Mess = new Message({
      name: name,
      msg: msg,
      time:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    });
    console.log("Trying to save the shit!");
    Mess.save((err, doc) => {
      if (err) {
      } else {
        Message.find({}, (err, docs) => {
          res.status(200).json(docs);
        })
          .sort({ time: -1 })
          .limit(50);
      }
    });
  } else {
    return res.status(400).json({
      data: [],
      errors: "Chybí povinné náležitosti objektu",
    });
  }
});
