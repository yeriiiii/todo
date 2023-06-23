export interface Task {
    id: string;
    text: string;
    dueDate: string;
    isDone: boolean;
}

export enum SortOption {
    BASIC,
    TEXT,
    DATE,
    STATE,
}

export enum TaskListType {
    ALL = "all",
    TODO = "todo",
    DONE = "done",
}
