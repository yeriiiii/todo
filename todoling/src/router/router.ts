import { createWebHistory, createRouter } from "vue-router";
import AllMain from "../components/main/AllMain.vue";
import TodoMain from "../components/main/TodoMain.vue";
import DoneMain from "../components/main/DoneMain.vue";

const routes = [
  {
    path: "/todo",
    component: TodoMain,
  },
  {
    path: "/done",
    component: DoneMain,
  },
  {
    path: "/all",
    component: AllMain,
  },
  {
    path: "/",
    component: AllMain,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
