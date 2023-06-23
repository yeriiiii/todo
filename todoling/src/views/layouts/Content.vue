<template>
    <div class="my-6 space-y-3 text-md">
        <div v-for="task in listByType" :key="task.id">
            <TaskItem
                :task="task"
                :taskType="task.isDone === true ? 'done' : 'todo'"
            ></TaskItem>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TaskItem from "../components/TaskItem.vue";
import { useTaskStore } from "@/stores/task-store.ts";
import { TaskListType } from "@/declaration/index";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: "ALL",
        },
    },
    components: {
        TaskItem,
    },
    setup(props) {
        const taskStore = useTaskStore();

        const listByType = computed(() => {
            switch (props.type) {
                case TaskListType.ALL:
                    return taskStore.allTasks;
                case TaskListType.TODO:
                    return taskStore.todoTasks;
                case TaskListType.DONE:
                    return taskStore.doneTasks;
                default:
                    return [];
            }
        });

        return {
            listByType,
        };
    },
});
</script>
