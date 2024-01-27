import mongoose, { Schema } from "mongoose";

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
    collection: "task",
  }
);

export const Task = mongoose.model("Task", taskSchema);
