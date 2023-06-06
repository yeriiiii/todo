<template>
  <div>
    <div class="flex flex-row items-center justify-items-stetch">
      <div
        class="flex items-center h-10 px-3 mt-3 mb-2 bg-gray-100 rounded-lg basis-full"
      >
        <input
          class="bg-transparent border-none basis-full"
          v-model="newTaskText"
          @keyup.enter="addTaskWithOutDate(newTaskText)"
          placeholder="할 일을 입력하세요!"
        />
        <img
          class="w-5 h-5 ml-2 rounded-md hover:bg-gray-200"
          @click="datePopupToggle"
          v-if="currentDueDate === `null`"
          src="../../../assets/images/calendar.svg"
        />
        <img
          class="w-5 h-5 ml-2 rounded-md hover:bg-gray-200"
          @click="datePopupToggle"
          v-if="currentDueDate !== `null`"
          src="../../../assets/images/calendar_b.svg"
        />
      </div>

      <button
        @click="addTaskWithOutDate(newTaskText)"
        class="items-center h-10 ml-2 text-xl font-extrabold text-indigo-500 bg-indigo-100 rounded-md basis-10 hover:bg-indigo-200"
      >
        +
      </button>
    </div>
    <div
      class="absolute flex items-center p-2 rounded-lg w-34 h-11 right-16 bg-indigo-50"
      v-if="datePopupVisible"
    >
      <input
        class="w-16 ml-3 text-sm bg-transparent border-none text-slate-800"
        v-model="dueDateInput"
      />
      <div
        class="w-8 h-6 ml-2 mr-1 text-center bg-indigo-200 rounded-md hover:bg-indigo-300"
        @click="setDueDate(dueDateInput)"
      >
        ✓
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { useTaskStore } from "../../../stores/taskStore.js";
import { task } from "../../../declaration/interface.js";
import { v1 as uuid } from "uuid";
import { postTask } from "../../../api/http-module";
import dayjs from "dayjs";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
    const newTaskText: Ref<string> = ref("");
    const datePopupVisible: Ref<boolean> = ref(false);
    const dueDateInput: Ref<string> = ref("" + dayjs().format("YY-MM-DD"));
    const currentDueDate: Ref<string> = ref("null");

    const addTaskWithOutDate = async (text: string) => {
      if (text === "") {
        return;
      }
      const newTask: task = {
        id: uuid(),
        text: text,
        dueDate: currentDueDate.value,
        isDone: false,
      };

      const response = await postTask(newTask);
      if (response.status === 201) {
        taskStore.addTask(newTask);
      } else {
        alert("post request failure");
        console.error(response);
      }

      newTaskText.value = "";
      currentDueDate.value = "null";
    };

    const datePopupToggle = () => {
      datePopupVisible.value = !datePopupVisible.value;
    };

    const setDueDate = (date: string) => {
      // [todo] invalid input check? (정규표현식)
      currentDueDate.value = date;
      datePopupVisible.value = false;
    };

    return {
      newTaskText,
      datePopupVisible,
      dueDateInput,
      currentDueDate,
      addTaskWithOutDate,
      datePopupToggle,
      setDueDate,
    };
  },
});
</script>
