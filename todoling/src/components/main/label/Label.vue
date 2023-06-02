<template>
  <div class="flex items-center p-2 rounded-lg bg-indigo-100">
    <img class="ml-1 p-1" :src="imgSrc" />
    <span
      class="font-bold text-lg text-indigo-500 flex-1 ml-3 whitespace-nowrap"
      >{{ type }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import allIcon from "../../../assets/images/archive.svg";
import todoIcon from "../../../assets/images/square.svg";
import doneIcon from "../../../assets/images/check-square.svg";

export default defineComponent({
  props: {
    type: String,
  },
  setup(props) {
    let imgSrc
    switch (props.type) {
      case "ALL":
        imgSrc = allIcon;
        break;
      case "TODO":
        imgSrc = todoIcon;
        break;
      case "DONE":
        imgSrc = doneIcon;
        break;
      default:
        imgSrc = allIcon;
    }
    return { imgSrc };
  },
});
</script>
