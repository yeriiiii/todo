import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/style.css";
import router from "./router/router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router).mount("#app");
