import { createWebHistory, createRouter } from "vue-router";
import Home from "../src/components/ProductsView.vue";
import Create from "../src/components/CreateProduct.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createProduct",
    name: "CreateProduct",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;