<template>
    <div :class="`${taskType}-task `">
        <button>
            <img
                v-if="taskType == 'done'"
                src="@/assets/images/checkbox-checked-1.svg"
                @click="changeTaskState(task, false)"
                class="w-5 h-5 ml-1 mr-4 bg-gray-200 hover:bg-gray-50"
            />
            <img
                v-else
                src="@/assets/images/checkbox-unchecked-1.svg"
                @click="changeTaskState(task, true)"
                class="w-5 h-5 ml-1 mr-4 hover:bg-indigo-100"
            />
        </button>
        <div>{{ task.text }}</div>
        <div class="flex ml-auto">
            <div>{{ task.dueDate }}</div>
            <button>
                <img
                    class="ml-3 rounded-lg hover:bg-red-100"
                    @click="removeTask(task.id)"
                    src="@/assets/images/trash.svg"
                />
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "@/stores/task-store.ts";
import { Task } from "@/declaration/index";
import { deleteTask, putTask } from "@/api/http-module";
export default defineComponent({
    emits: ["changeTaskState", "removeTask"],
    props: {
        task: {
            type: Object as () => Task,
            default: {
                id: "",
                text: "",
                dueDate: "",
                isDone: false,
            },
        },
        taskType: {
            type: String,
            default: "todo",
        },
    },

    setup() {
        const taskStore = useTaskStore();
        const changeTaskState = async (task: Task, state: boolean) => {
            const updatedTask: Task = { ...task, isDone: state };
            try {
                await putTask(updatedTask);
                taskStore.changeTaskState(task.id, state);
            } catch (error) {
                console.error(error);
            }
        };

        const removeTask = async (id: string) => {
            try {
                await deleteTask(id);
                taskStore.removeTask(id);
            } catch (error) {
                console.error(error);
            }
        };

        return { changeTaskState, removeTask };
    },
});
</script>
