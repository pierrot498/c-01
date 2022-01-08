import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mint from "./views/Mint.vue";
import Raffe from "./views/Raffe.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/mint",
      name: "Mint",
      component: Mint,
    },
    {
      path: "/raffe",
      name: "Raffe",
      component: Raffe,
    },
    {
      path: "*",
      name: "Home",
      component: Home,
    },
  ],
});