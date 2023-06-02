<template>
  <div>
    <div class="flex items-center p-2 mt-2 text-xl font-bold text-blue-400">
      DONE
    </div>
    <ul class="space-y-3 my-1 text-md text-gray-400">
      <li v-for="task in taskStore.getDoneTasks" :key="task.id">
        <div
          class="p-3 w-full h-13 bg-gray-100 flex items-center justify-content"
        >
          <div
            @click="toggleThisTask(task.id)"
            class="w-5 h-5 ml-1 mr-4 border-2 bg-gray-200 hover:bg-gray-50"
          ></div>
          <div>{{ task.text }}</div>
          <div class="ml-auto flex">
            <div v-if="task.dueDate !== `null`">{{ task.dueDate }}</div>
            <img
              class="hover:bg-gray-200 rounded-lg ml-3"
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
import { deleteTasks } from "../../../api/http-module";


export default defineComponent({
  props: {
    sortOption: String,
  },
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
