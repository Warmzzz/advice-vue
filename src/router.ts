import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("./views/Home.vue"), name: "home" },
    { path: "/about", component: import("./views/About.vue"), name: "about" },
    { path: "/random", component: () => import("./views/Random.vue"), name: "random" },
    { path: "/advice/:id", component: () => import("./views/AdviceById.vue"), name: "advice-by-id" },
    { path: "/search", component: () => import("./views/SearchPage.vue"), name: "search" },

    // 404 route
    { path: "/:pathMatch(.*)*", component: () => import("./views/NotFound.vue"), name: "not-found" },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})