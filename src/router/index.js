import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/zoo",
    name: "zoo",
    // route level code-splitting
    // this generates a separate chunk (zoo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "zoo" */ "../views/ZooPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
