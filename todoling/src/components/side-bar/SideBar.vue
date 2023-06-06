<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div class="text-2xl text-indigo-400 font-extrabold pt-1 pr-1 pb-3 pl-1">
        TODOLING
      </div>
      <ul class="space-y-2">
        <li>
          <router-link
            to="/all"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <img src="../../assets/images/archive.svg" />
            <span class="flex-1 ml-3 whitespace-nowrap">ALL</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full"
              >{{ taskStore.getAllTasks.length }}</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/todo"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <img src="../../assets/images/square.svg" />
            <span class="flex-1 ml-3 whitespace-nowrap">TODO</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-red-800 bg-red-200 rounded-full"
              >{{ taskStore.getTodoTasks.length }}</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/done"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <img src="../../assets/images/check-square.svg" />
            <span class="flex-1 ml-3 whitespace-nowrap">DONE</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-8=700 bg-blue-100 rounded-full"
              >{{ taskStore.getDoneTasks.length }}</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { useTaskStore } from "../../stores/taskStore.js";
import { defineComponent } from "vue";


export default defineComponent({
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
    
  }
});
</script>
