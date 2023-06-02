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

export const postTasks = async (newTask: task) => {
  const response = await axios
    .post("http://localhost:3000/tasks", newTask)
    .then((response) => {
      return response;
    });
  return response;
};

export const deleteTasks = async (taskId: string) => {
  const response = await axios
    .delete("http://localhost:3000/tasks/" + taskId)
    .then((response) => {
      return response;
    });
  return response;
};
