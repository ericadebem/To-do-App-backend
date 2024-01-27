import { Task } from "./taskModel.js";

const handleError = (error, res) => {
  console.error(error.msg);
  return res.status(500).json(error);
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(res.params.id);
    task
      ? res.status(201).json({ task })
      : res.status(404).json({ msg: "Task not found" });
  } catch (error) {
    handleError(error, res);
  }
};
export const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(201).json({ task });
  } catch (error) {
    handleError(error, res);
  }
};
export const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(req.body);
    res.status(201).json({ task });
  } catch (error) {
    handleError(error, res);
  }
};
export const patchTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    task
      ? res.status(201).json({ task })
      : res.status(404).json({ msg: "Task not found" });
  } catch (error) {
    handleError(error, res);
  }
};
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status().json({ task });
  } catch (error) {
    handleError(error, res);
  }
};
