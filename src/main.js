import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/home/BaseButton.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.use(router);
app.mount("#app");
