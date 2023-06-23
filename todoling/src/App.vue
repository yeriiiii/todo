<template>
    <SideBar></SideBar>
    <router-view></router-view>
</template>

<script lang="ts">
import SideBar from "@/views/layouts/SideBar.vue";
import { defineComponent, onBeforeMount } from "vue";
import { useTaskStore } from "./stores/task-store";
import { getTasks } from "./api/http-module";
export default defineComponent({
    components: {
        SideBar,
    },
    setup() {
        const taskStore = useTaskStore();
        onBeforeMount(async () => {
            try {
                const tasks = await getTasks();
                taskStore.setTasks(tasks);
            } catch (err) {
                console.error(err);
            }
        });
        return { taskStore };
    },
});
</script>
