import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UsersList from "./pages/UsersList.vue";
import UserDetail from "./pages/UserDetail.vue";
import NotFound from "./pages/NotFound.vue";
import AboutPage from "./pages/AboutPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/users", component: UsersList },
    { path: "/users/:id", component: UserDetail, props: true },
    { path: "/about", component: AboutPage },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
