import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

const app = createApp(App);

app.use(store);
store.dispatch("LOAD_USER_DATA", 10);
app.use(router);
app.mount("#app");
