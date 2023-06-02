<template>
  <div class="p-4 sm:ml-64">
    <Label :type="`DONE`"></Label>
    <TodoInput></TodoInput>
    <Sort></Sort>
    <DoneTasks></DoneTasks>
  </div>
</template>
<script lang="ts">
import Label from "./label/Label.vue";
import TodoInput from "./input/TodoInput.vue";
import DoneTasks from "./list/DoneTasks.vue";
import Sort from "./sort/Sort.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Label,
    TodoInput,
    Sort,
    DoneTasks,
  },
});
</script>
