import express from "express";

import { getTask, getAllTasks, postTask, deleteTask, patchTask } from "./taskController.js";

export const taskRouter = express.Router();

taskRouter.route("/").post(postTask).get(getAllTasks);
taskRouter.route("/:id").get(getTask).patch(patchTask).delete(deleteTask)
