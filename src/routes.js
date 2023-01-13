import { createWebHistory, createRouter } from "vue-router";
import Home from "../src/components/ProductsView.vue";
import EditProductView from "../src/components/EditProductView";
import SignUpForm from "../src/components/SignUpForm";
import LogInForm from "../src/components/LogInForm"

const routes = [
  {
    path: "/api/login",
    name: "LogInUser",
    component: LogInForm
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "EditProduct",
    component: EditProductView,
  },
  {
    path: "/signup",
    name: "SignUpUser",
    component: SignUpForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;