<template>
    <div>
        <Label :type="type"></Label>
        <TaskInput
            @datePopupToggle="datePopupVisible = !datePopupVisible"
            @addTask="addTask"
            :savedDueDate="savedDueDate"
        >
        </TaskInput>
        <DatePicker v-if="datePopupVisible" @saveDueDate="saveDueDate" @clearDueDate="savedDueDate = ''">
        </DatePicker>
        <SortButtons></SortButtons>
    </div>
</template>
<script lang="ts">
import Label from "../components/Label.vue";
import TaskInput from "../components/TaskInput.vue";
import SortButtons from "../components/SortButtons.vue";
import { defineComponent, Ref, ref } from "vue";
import DatePicker from "../components/DatePicker.vue";
import { useTaskStore } from "@/stores/task-store";
import { Task } from "@/declaration/index";
import { v1 as uuid } from "uuid";
import { postTask } from "@/api/http-module";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: "ALL",
        },
    },
    components: {
        Label,
        TaskInput,
        SortButtons,
        DatePicker,
    },
    setup() {
        const taskStore = useTaskStore();
        const datePopupVisible: Ref<boolean> = ref(false);
        const savedDueDate: Ref<string> = ref("");

        const addTask = async (text: string) => {
            const newTask: Task = {
                id: uuid(),
                text: text,
                dueDate: savedDueDate.value,
                isDone: false,
            };

            try {
                await postTask(newTask);
                taskStore.addTask(newTask);
            } catch (err) {
                console.error(err);
            }

            savedDueDate.value = "";
        };

        const saveDueDate = (year: string, month: string, day: string) => {
            savedDueDate.value = `${year}-${month}-${day}`;
            datePopupVisible.value = false;
        };

        return { taskStore, datePopupVisible, savedDueDate, addTask, saveDueDate };
    },
});
</script>
