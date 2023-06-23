import { defineStore } from "pinia";
import { Task } from "../declaration";
import { TaskState } from "./store-types";
import { sortTasksWithOption } from "../utils";
import { SortOption } from "@/declaration/index";

export const useTaskStore = defineStore("taskStore", {
    state: (): TaskState => ({
        tasks: [],
        sortOption: SortOption.BASIC,
    }),
    getters: {
        allTasks(): Task[] {
            return sortTasksWithOption(this.tasks, this.sortOption);
        },
        doneTasks(): Task[] {
            return sortTasksWithOption(
                this.tasks.filter((task) => task.isDone),
                this.sortOption
            );
        },
        todoTasks(): Task[] {
            return sortTasksWithOption(
                this.tasks.filter((task) => !task.isDone),
                this.sortOption
            );
        },
    },
    actions: {
        setTasks(tasks: Task[]) {
            this.tasks = tasks;
        },
        addTask(newTask: Task) {
            this.tasks.unshift(newTask);
        },
        changeTaskState(id: string, state: boolean) {
            this.tasks = this.tasks.map((task) => {
                return task.id === id ? { ...task, isDone: state } : task;
            });
        },
        removeTask(id: string) {
            this.tasks = this.tasks.filter((task) => task.id !== id);
        },
        setSortOption(option: SortOption) {
            this.sortOption = option;
        },
    },
});
