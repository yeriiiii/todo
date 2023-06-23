<template>
    <div class="flex mt-1">
        <button
            @click="taskStore.setSortOption(SortOption.BASIC)"
            class="ml-auto text-sm font-bold text-indigo-200 hover:text-indigo-300"
        >
            생성순
        </button>
        <button
            @click="taskStore.setSortOption(SortOption.TEXT)"
            class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
        >
            글자순
        </button>
        <button
            @click="taskStore.setSortOption(SortOption.DATE)"
            class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
        >
            날짜순
        </button>
        <button
            @click="taskStore.setSortOption(SortOption.STATE)"
            class="ml-3 text-sm font-bold text-indigo-200 hover:text-indigo-300"
        >
            상태순
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { SortOption } from "@/declaration/index";
import { useTaskStore } from "@/stores/task-store";

export default defineComponent({
    setup() {
        const taskStore = useTaskStore();
        return { taskStore, SortOption };
    },
});
</script>
