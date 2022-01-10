import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mint from "./views/Mint.vue";
import Raffle from "./views/Raffle.vue";
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
      path: "/raffle",
      name: "Raffle",
      component: Raffle,
    },
    {
      path: "*",
      name: "Home",
      component: Home,
    },
  ],
});