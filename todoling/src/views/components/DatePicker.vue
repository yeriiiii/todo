<template>
    <div class="absolute flex flex-row flex-wrap items-center h-24 p-2 rounded-lg w-52 right-16 bg-indigo-50">
        <div></div>
        <input
            class="w-12 h-6 ml-2 text-lg font-bold text-center border-none text-slate-700"
            v-model="dueDateYear"
        />
        <input
            class="w-8 h-6 ml-2 text-lg font-bold text-center border-none text-slate-700"
            v-model="dueDateMonth"
        />
        <input
            class="w-8 h-6 ml-2 text-lg font-bold text-center border-none text-slate-700"
            v-model="dueDateDay"
        />
        <button
            class="w-10 h-6 ml-2 mr-1 font-bold text-center bg-indigo-200 rounded-md text-slate-700 hover:bg-indigo-300"
            @click="saveDueDate"
        >
            ✓
        </button>
        <div class="flex flex-row items-center mt-1 ml-2">
            <button
                class="w-10 h-6 text-sm font-bold text-center rounded-md bg-violet-200 text-slate-700 hover:bg-violet-300"
                @click="setDueDate()"
            >
                today
            </button>
            <button
                class="w-6 h-6 ml-2 text-sm font-bold text-center bg-blue-200 rounded-md text-slate-700 hover:bg-blue-300"
                @click="setDueDate(1)"
            >
                +1
            </button>
            <button
                class="w-6 h-6 ml-1 text-sm font-bold text-center bg-blue-200 rounded-md text-slate-700 hover:bg-blue-300"
                @click="setDueDate(2)"
            >
                +2
            </button>
            <button
                class="w-6 h-6 ml-1 text-sm font-bold text-center bg-blue-200 rounded-md text-slate-700 hover:bg-blue-300"
                @click="setDueDate(7)"
            >
                +7
            </button>
            <button
                class="w-10 h-6 ml-2 text-sm font-bold text-center bg-red-200 rounded-md text-slate-700 hover:bg-red-300"
                @click="$emit('clearDueDate')"
            >
                clear
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import dayjs from "dayjs";

export default defineComponent({
    emit: ["saveDueDate"],
    setup(_, ctx) {
        const today = dayjs().format("YYYY-MM-DD").split("-");
        const dueDateYear: Ref<string> = ref(today[0]);
        const dueDateMonth: Ref<string> = ref(today[1]);
        const dueDateDay: Ref<string> = ref(today[2]);
        const regex = /^\d{4}-\d{2}-\d{2}$/;

        const setYearMonthDay = (YearMonthDay: string[]) => {
            dueDateYear.value = YearMonthDay[0];
            dueDateMonth.value = YearMonthDay[1];
            dueDateDay.value = YearMonthDay[2];
        };

        const setDueDate = (day: number | undefined = undefined) => {
            if (day == undefined) {
                setYearMonthDay(today);
            } else {
                const afterDay = dayjs(`${dueDateYear.value}-${dueDateMonth.value}-${dueDateDay.value}`)
                    .add(day, "day")
                    .format("YYYY-MM-DD")
                    .split("-");
                setYearMonthDay(afterDay);
            }
        };

        const saveDueDate = () => {
            const dueDate = `${dueDateYear.value}-${dueDateMonth.value}-${dueDateDay.value}`;
            if (!regex.test(dueDate)) {
                alert("Invalid Input: YYYY-MM-DD 형식으로 입력해주세요.");
                setYearMonthDay(today);
                return;
            } else if (dayjs(dueDate).isBefore(dayjs().format("YYYY-MM-DD"))) {
                alert("Invalid Input: 오늘보다 이후 날짜를 입력해주세요.");
                setYearMonthDay(today);
                return;
            }
            ctx.emit("saveDueDate", dueDateYear.value, dueDateMonth.value, dueDateDay.value);
        };

        return {
            dueDateYear,
            dueDateMonth,
            dueDateDay,
            setDueDate,
            saveDueDate,
        };
    },
});
</script>
