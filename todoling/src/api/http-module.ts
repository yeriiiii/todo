import axios from "axios";
import { Task } from "../declaration";

export const getTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    if (response.status === 200) {
        return response.data.reverse();
    } else {
        throw new Error("getTask Fail");
    }
};

export const postTask = async (newTask: Task) => {
    const response = await axios.post("http://localhost:3000/tasks", newTask);
    if (response.status === 201) {
        return;
    } else {
        throw new Error("addTask Fail");
    }
    return response;
};

export const deleteTask = async (taskId: string) => {
    const response = await axios.delete("http://localhost:3000/tasks/" + taskId);
    if (response.status === 200) {
        return;
    } else {
        throw new Error("deleteTask Fail");
    }
};

export const putTask = async (updatedTask: Task) => {
    const response = await axios.put("http://localhost:3000/tasks/" + updatedTask.id, updatedTask);
    if (response.status === 200) {
        return;
    } else {
        throw new Error("putTask Fail");
    }
};
