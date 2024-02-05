import "@/assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import useCartStore from "./stores/cartStore";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// app.provide("useCartStore", cartStore);

app.mount("#app");
