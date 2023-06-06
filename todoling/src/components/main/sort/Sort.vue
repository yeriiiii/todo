<template>
  <div class="flex mt-1">
    <span
      @click="selectSortOption('basic')"
      class="ml-auto text-sm font-bold text-indigo-200 hover:text-indigo-300"
      >Basic</span
    >
    <span
      @click="selectSortOption('AtoZ')"
      class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
      >A→Z</span
    >
    <span
      @click="selectSortOption('ZtoA')"
      class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
      >Z→A</span
    >
    <span
      @click="selectSortOption('0to9')"
      class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
      >0→9</span
    >
        <span
      @click="selectSortOption('9to0')"
      class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
      >9→0</span
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
