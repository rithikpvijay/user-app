import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router.ts";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseLoading from "./components/UI/BaseLoading.vue";
import BaseMenu from "./components/UI/BaseMenu.vue";

const app = createApp(App);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseLoading", BaseLoading);
app.component("BaseMenu", BaseMenu);
app.use(router);
app.mount("#app");
