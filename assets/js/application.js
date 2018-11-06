require("expose-loader?$!expose-loader?jQuery!jquery");
require("bootstrap/dist/js/bootstrap.bundle.js");
require("bootstrap-vue/dist/bootstrap-vue.js");

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "router";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import BandComponent from "./components/band.vue";
import MembersComponent from "./components/members.vue";

const routes = [
  { path: "/band/:id", component: MembersComponent, name: "showBand" },
  { path: "/", component: BandComponent }
];

const router = new VueRouter({
  mode: "history",
  routes
});

const app = new Vue({
  router
}).$mount("#app");
