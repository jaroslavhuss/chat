import Express, { Request, Response } from "express";
import DB from "./Database/Connect";
import { Chat } from "./Controllers/Chat";
const App = Express();
App.use(Express.json());
const appPreload = async () => {
  const dbConnection = await DB.connect();
  console.log(dbConnection);
  if (dbConnection) {
    console.log("app si fakin connected!");
    App.get("/", (req: Request, res: Response) => {
      res.status(200).send("Cool");
    });
    App.use("/chat/", Chat);
    App.listen(process.env.PORT || 9000, () => {
      console.log("App runs at some shajt!");
    });
  } else {
    console.log("Can not connect to the server");
  }
};
appPreload();
