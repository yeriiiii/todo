<template>
  <div>
    <div class="flex items-center p-2 mt-2 text-xl font-bold text-blue-400">DONE</div>
    <ul class="my-1 space-y-3 text-gray-400 text-md">
      <li v-for="task in taskStore.getDoneTasks" :key="task.id">
        <div class="flex items-center w-full p-3 bg-gray-100 h-13 justify-content">
          <div
            @click="toggleThisTask(task.id, task.text, task.dueDate)"
            class="w-5 h-5 ml-1 mr-4 bg-gray-200 border-2 hover:bg-gray-50"
          ></div>
          <div>{{ task.text }}</div>
          <div class="flex ml-auto">
            <!-- <button @click="updateThisTask(task.id, `test`, task.dueDate, true)">수정</button> -->
            <div v-if="task.dueDate !== `null`">{{ task.dueDate }}</div>
            <img
              class="ml-3 rounded-lg hover:bg-gray-200"
              @click="removeThisTask(task.id)"
              src="../../../assets/images/trash_gg.svg"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "../../../stores/taskStore.js";
import { deleteTask, putTask } from "../../../api/http-module";

export default defineComponent({
  props: {
    sortOption: String,
  },
  setup() {
    const taskStore = useTaskStore();

    const toggleThisTask = async (id: string, text: string, dueDate: string) => {
      const response = await putTask(id, text, dueDate, false);
      if (response.status === 200) {
        taskStore.toggleTask(id);
      } else {
        alert("put request failure");
        console.error(response);
      }
    };

    const updateThisTask = async (id: string, text: string, dueDate: string, isDone: boolean) => {
      const response = await putTask(id, text, dueDate, isDone);
      if (response.status === 200) {
      } else {
        alert("put request failure");
        console.error(response);
      }
    };

    const removeThisTask = async (id: string) => {
      const response = await deleteTask(id);
      if (response.status === 200) {
        taskStore.removeTask(id);
      } else {
        alert("delete request failure");
        console.error(response);
      }
    };
    return { taskStore, toggleThisTask, removeThisTask, updateThisTask };
  },
});
</script>
