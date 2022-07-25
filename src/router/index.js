import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
const routes = [
  { path: "/", name: "home", component: () => import("@/views/ShowMain.vue") },
  { path: "/second", name: "second", component: () => import("@/views/ShowSecond.vue") },
  { path: "/third", name: "third", component: () => import("@/views/ShowThird.vue") },
  { path: "/fourth", name: "fourth", component: () => import("@/views/ShowFourth.vue") },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "router-link-active", // default link active class name
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login", query: to.query };
  }
});

export default router;
