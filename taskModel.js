import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema(
  {
    title: String,
    date: Number,
    action: String,
    periodicity: Number,
  },
  {
    timestamps: true,
    versionKey: false,
    collation: "task",
  }
);

export const Task = mongoose.model("Task", taskSchema);
