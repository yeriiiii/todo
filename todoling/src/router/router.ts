import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/pages/Main.vue";
import ErrorPage from "@/views/pages/ErrorPage.vue";
import { TaskListType } from "@/declaration/index";

const routes = [
    {
        path: "/all",
        component: Main,
        props: { taskListType: TaskListType.ALL },
    },
    {
        path: "/todo",
        component: Main,
        props: { taskListType: TaskListType.TODO },
    },
    {
        path: "/done",
        component: Main,
        props: { taskListType: TaskListType.DONE },
    },
    {
        path: "/:pathMatch(.*)",
        name: "ErrorPage",
        component: ErrorPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
