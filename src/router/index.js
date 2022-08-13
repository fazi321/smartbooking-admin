import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Vendors from "../views/Vendors.vue";
const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },
  {
    path: "/vendor",
    name: "vendor",
    component: Vendors,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
