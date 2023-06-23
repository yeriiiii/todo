<template>
    <div class="p-4 sm:ml-64">
        <Header :type="type"></Header>
        <Content :type="type"></Content>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeUpdate } from "vue";
import Header from "../layouts/Header.vue";
import Content from "../layouts/Content.vue";

export default defineComponent({
    components: {
        Header,
        Content,
    },
    props: {
        taskListType: {
            type: String,
        },
    },
    setup(props) {
        let type = ref(props.taskListType);
        onBeforeUpdate(() => (type.value = props.taskListType));

        return { type };
    },
});
</script>
