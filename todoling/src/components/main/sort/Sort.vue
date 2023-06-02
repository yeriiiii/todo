<template>
  <div class="mt-1 flex">
    <span
      @click="selectSortOption('basic')"
      class="font-bold text-sm text-indigo-200 ml-auto hover:text-indigo-300"
      >기본</span
    >
    <span
      @click="selectSortOption('AtoZ')"
      class="font-bold text-sm text-indigo-200 ml-3 hover:text-indigo-300"
      >글자순</span
    >
    <span
      @click="selectSortOption('0to9')"
      class="font-bold text-sm text-indigo-200 ml-3 hover:text-indigo-300"
      >날짜순</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "../../../stores/taskStore.js";
export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
    const selectSortOption = (option: string) => {
      taskStore.setSortOption(option);
    };
    return { selectSortOption };
  },
});
</script>
