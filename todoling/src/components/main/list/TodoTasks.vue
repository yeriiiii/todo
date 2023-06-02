<template>
  <div>
    <div class="flex items-center p-2 mt-2 text-xl font-bold text-red-400">
      TODO
    </div>
    <ul class="space-y-3 my-1 text-md">
      <li v-for="task in taskStore.getTodoTasks" :key="task.id">
        <div
          class="p-3 w-full h-13 border-2 border-indigo-100 flex items-center justify-between"
        >
          <div
            @click="toggleThisTask(task.id)"
            class="w-5 h-5 ml-1 mr-4 border-2 border-indigo-200 hover:bg-indigo-100"
          ></div>
          <div class="text-slate-700">{{ task.text }}</div>
          <div class="ml-auto flex">
            <div v-if="task.dueDate !== `null`" class="text-slate-500">
              {{ task.dueDate }}
            </div>
            <img
              class="hover:bg-indigo-50 rounded-lg ml-3"
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
import { deleteTasks } from "../../../api/http-module";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore();

    const toggleThisTask = (id: string) => {
      taskStore.toggleTask(id);
    };

    const removeThisTask = async (id: string) => {
      const response = await deleteTasks(id);
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
