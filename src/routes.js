import { createWebHistory, createRouter } from "vue-router";
import Home from "../src/components/ProductsView.vue";
import EditProductView from "../src/components/EditProductView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "EditProduct",
    component: EditProductView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;