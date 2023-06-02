<template>
  <div class="p-4 sm:ml-64">
    <Label :type="`TODO`"></Label>
    <TodoInput></TodoInput>
    <Sort></Sort>
    <TodoTasks></TodoTasks>
  </div>
</template>
<script lang="ts">
import Label from "./label/Label.vue";
import TodoInput from "./input/TodoInput.vue";
import TodoTasks from "./list/TodoTasks.vue";
import Sort from "./sort/Sort.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Label,
    TodoInput,
    Sort,
    TodoTasks,
  },
});
</script>
