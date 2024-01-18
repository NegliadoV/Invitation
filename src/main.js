import "./assets/style.scss";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Guests from "./pages/Guests.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/guests",
    name: "guests",
    component: Guests,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
