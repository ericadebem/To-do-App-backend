import express from "express";
import mongoose from "mongoose";
import { taskRouter } from "./taskRouter.js";
import cors from "cors";
const app = express();

const baseUrl = "/app";

app.use(express.json());
app.use(cors());
app.use(`${baseUrl}/task`, taskRouter);


const conectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://ericadebemm:cQQVdsTUT6ZrSsMj@cluster0.mu3nqdl.mongodb.net/001Todo"
    );
  } catch (error) {
    console.error(error);
  }
};
const port = 10000
conectDB().then(() => {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
});
