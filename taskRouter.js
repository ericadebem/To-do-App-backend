import express from "express";

import { getTask, getAllTask, postTask, deleteTask, patchTask } from "./taskController.js";

export const taskRouter = express.Router();

taskRouter.route("/").post(postTask).get(getAllTask);
taskRouter.route("/:id").get(getTask).patch(patchTask).delete(deleteTask)
