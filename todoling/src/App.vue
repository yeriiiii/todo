<template>
  <SideBar></SideBar>
  <router-view></router-view>
</template>

<script lang="ts">
import SideBar from "./components/side-bar/SideBar.vue";
import { defineComponent, onBeforeMount } from "vue";
import { useTaskStore } from "./stores/taskStore.ts";
import { getTasks } from "./api/http-module";
export default defineComponent({
  components: {
    SideBar,
  },
  setup() {
    const taskStore = useTaskStore();
    onBeforeMount(async () => {
      const response = await getTasks();
      if (response.status === 200) {
        taskStore.setTasks(response.data.reverse());
        console.log("get task success!")
      } else {
        alert("get request failure");
        console.error(response);
      }
    });
  },
});
</script>
