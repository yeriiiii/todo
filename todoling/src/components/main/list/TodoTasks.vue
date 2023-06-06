<template>
  <div>
    <div class="flex items-center p-2 mt-2 text-xl font-bold text-red-400">TODO</div>
    <ul class="my-1 space-y-3 text-md">
      <li v-for="task in taskStore.getTodoTasks" :key="task.id">
        <div class="flex items-center justify-between w-full p-3 border-2 border-indigo-100 h-13">
          <div
            @click="toggleThisTask(task.id, task.text, task.dueDate)"
            class="w-5 h-5 ml-1 mr-4 border-2 border-indigo-200 hover:bg-indigo-100"
          ></div>
          <div class="text-slate-700">{{ task.text }}</div>
          <div class="flex ml-auto">
            <div v-if="task.dueDate !== `null`" class="text-slate-500">
              {{ task.dueDate }}
            </div>
            <img
              class="ml-3 rounded-lg hover:bg-indigo-50"
              @click="removeThisTask(task.id)"
              src="../../../assets/images/trash.svg"
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
  setup() {
    const taskStore = useTaskStore();

    const toggleThisTask = async (id: string, text: string, dueDate: string) => {
      const response = await putTask(id, text, dueDate, true);
      if (response.status === 200) {
        taskStore.toggleTask(id);
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

    return { taskStore, toggleThisTask, removeThisTask };
  },
});
</script>
