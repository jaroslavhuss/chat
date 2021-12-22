import Mongoose from "mongoose";
class dbConnect {
  connect() {
    return new Promise((res, rej): any => {
      Mongoose.connect(
        "mongodb://127.0.0.1:27017/chat",
        {
          //@ts-ignore
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          console.log(err);
          if (err) {
            res(false);
            rej(false);
          } else {
            res(true);
          }
        }
      );
    });
  }
}
export default new dbConnect();
