import { defineStore } from "pinia";
import { task } from "../declaration/interface";
import { TaskState } from "./store-types";

const sortWithOption = (data: task[], option: string) => {
  switch (option) {
    case "AtoZ":
      return data.sort((a, b: task) => {
        return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
      });
    case "0to9":
      return data.sort((a, b: task) => {
        return a.dueDate.localeCompare(b.dueDate);
      });
    case "ZtoA":
      return data.sort((a, b: task) => {
        return b.text.toLowerCase().localeCompare(a.text.toLowerCase());
      });
    case "9to0":
      return data.sort((a, b: task) => {
        return b.dueDate.localeCompare(a.dueDate);
      });
    default:
      return data;
  }
};

export const useTaskStore = defineStore("taskStore", {
  state: (): TaskState => ({
    tasks: [],
    sortOption: "basic",
  }),
  getters: {
    getAllTasks(): task[] {
      return sortWithOption(this.tasks, this.sortOption);
    },
    getDoneTasks(): task[] {
      return sortWithOption(
        this.tasks.filter((task) => task.isDone),
        this.sortOption
      );
    },
    getTodoTasks(): task[] {
      return sortWithOption(
        this.tasks.filter((task) => !task.isDone),
        this.sortOption
      );
    },
  },
  actions: {
    setTasks(tasks: task[]) {
      this.tasks = tasks;
    },
    addTask(newTask: task) {
      this.tasks.unshift(newTask);
    },
    toggleTask(id: string) {
      this.tasks = this.tasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : task;
      });
    },
    removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    setSortOption(option: string) {
      this.sortOption = option;
    },
  },
});
