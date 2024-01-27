import mongoose, { Schema } from "mongoose";

export const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    date: {
      type: Number,
      require: true,
    },
    action:{
      type: String,
      require: true,
    },
    periodicity: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "task",
  }
);

export const Task = mongoose.model("Task", taskSchema);
