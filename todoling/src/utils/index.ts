import { Task } from "@/declaration";
import { SortOption } from "@/declaration/index";

export const sortTasksWithOption = (tasks: Task[], option: string) => {
    switch (option) {
        case SortOption.BASIC:
            return tasks;
        case SortOption.TEXT:
            return [...tasks].sort((a, b: Task) => {
                return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
            });
        case SortOption.DATE:
            return [...tasks].sort((a, b: Task) => {
                return a.dueDate.localeCompare(b.dueDate);
            });
        case SortOption.STATE:
            return [...tasks].sort((a, b: Task) => {
                return a.isDone && !b.isDone ? 1 : -1;
            });
        default:
            return tasks;
    }
};
