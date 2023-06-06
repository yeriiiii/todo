import axios from "axios";
import { task } from "../declaration/interface";

export const getTasks = async () => {
  const response = await axios
    .get("http://localhost:3000/tasks")
    .then((response) => {
      return response;
    });
  return response;
};

export const postTask = async (newTask: task) => {
  const response = await axios
    .post("http://localhost:3000/tasks", newTask)
    .then((response) => {
      return response;
    });
  return response;
};

export const deleteTask = async (taskId: string) => {
  const response = await axios
    .delete("http://localhost:3000/tasks/" + taskId)
    .then((response) => {
      return response;
    });
  return response;
};

export const putTask = async (taskId: string, taskText: string, taskDueDate: string, taskIsDone) => {
  const response = await axios.put("http://localhost:3000/tasks/" + taskId, {
    id: taskId,
    text: taskText,
    dueDate: taskDueDate,
    isDone: taskIsDone,

  }).then((response) => {
    return response;
  });
  return response;
};
