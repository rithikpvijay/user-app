import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseLoading from "./components/UI/BaseLoading.vue";
import BaseMenu from "./components/UI/BaseMenu.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-loading", BaseLoading);
app.component("base-menu", BaseMenu);
app.use(router);
app.mount("#app");
