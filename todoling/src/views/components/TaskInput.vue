<template>
    <div class="flex flex-row items-center mt-3 mb-2 justify-items-stetch">
        <div class="flex items-center h-10 px-3 border-2 border-indigo-300 rounded-lg basis-full">
            <input
                class="bg-transparent border-none basis-full"
                v-model="newTaskText"
                @keyup.enter="addTask"
                placeholder="할 일을 입력하세요!"
            />
            <div class="w-20 mx-2 text-sm font-bold text-indigo-400 whitespace-nowrap">
                {{ savedDueDate }}
            </div>
            <button>
                <img
                    v-if="savedDueDate === ``"
                    class="w-5 h-5 rounded-md hover:bg-gray-200"
                    @click="$emit('datePopupToggle')"
                    src="@/assets/images/calendar.svg"
                />
                <img
                    v-else
                    class="w-5 h-5 rounded-md hover:bg-blue-200"
                    @click="$emit('datePopupToggle')"
                    src="@/assets/images/calendar_b.svg"
                />
            </button>
        </div>

        <button
            @click="addTask"
            class="items-center h-10 ml-2 text-2xl font-extrabold text-indigo-500 bg-indigo-200 border-2 border-indigo-300 rounded-md basis-10 hover:bg-indigo-400"
        >
            +
        </button>
    </div>
</template>
<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

export default defineComponent({
    emits: ["addTask", "datePopupToggle"],
    props: {
        savedDueDate: {
            type: String,
            default: "",
        },
    },
    setup(_, ctx) {
        const newTaskText: Ref<string> = ref("");

        const addTask = () => {
            if (newTaskText.value === "") {
                return;
            }
            ctx.emit("addTask", newTaskText.value);
            newTaskText.value = "";
        };

        return {
            newTaskText,
            addTask,
        };
    },
});
</script>
