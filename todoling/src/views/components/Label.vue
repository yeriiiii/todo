<template>
    <div class="flex items-center p-2 bg-indigo-100 rounded-lg">
        <img class="p-1 ml-1" :src="imgSrc" />
        <span class="flex-1 ml-3 text-lg font-bold text-indigo-500 whitespace-nowrap">{{ type }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { TaskListType } from "@/declaration/index";
import allIcon from "@/assets/images/archive.svg";
import todoIcon from "@/assets/images/square.svg";
import doneIcon from "@/assets/images/check-square.svg";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: "ALL",
        },
    },
    setup(props) {
        let imgSrc;
        switch (props.type) {
            case TaskListType.ALL:
                imgSrc = allIcon;
                break;
            case TaskListType.TODO:
                imgSrc = todoIcon;
                break;
            case TaskListType.DONE:
                imgSrc = doneIcon;
                break;
            default:
                imgSrc = allIcon;
        }
        return { imgSrc };
    },
});
</script>
