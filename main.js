import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const baseUrl = "/app";

app.use(express.json());
app.use(cors());
app.use(`${baseUrl}/task`, taskRouter);


const conectDB = async () => {
  try {
    const conection = await mongoose.connect(
      "mongodb+srv://ericadebemm:cQQVdsTUT6ZrSsMj@cluster0.mu3nqdl.mongodb.net/"
    );
  } catch (error) {
    console.error(error);
  }
};
conectDB().then(() => {
  app.listen(6060, () => {
    console.log("server listening on port 6060");
  });
});
