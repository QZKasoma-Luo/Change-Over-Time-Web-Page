import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login/_index.vue";
import layout from "../components/_layout.vue";
import MU from "../views/MU.vue";
import MCRR from "../views/MCRR.vue";
import Down from "../views/_Down.vue";
import Yield from "../views/_Yield.vue";
import DownTime from "../views/DownTime.vue";
import Hourly from "../views/_Hourly.vue";

import Total from "../views/OEE-H/_Total.vue";
import NO_Plan from "../views/OEE-H/NO_Plan.vue";
import _OEE_H_Down from "../views/OEE-H/_OEE_H_Down.vue";
import Out_of_cycle from "../views/OEE-H/_Out_of_cycle.vue";
import OEE_change_over from "../views/OEE-H/OEE_change_over.vue";
import unknown from "../views/OEE-H/_OEE_unknown.vue";
import setUp from "../views/OEE-H/setUp.vue";
import processing from "../views/OEE-H/_processing.vue";
import trail_run from "../views/OEE-H/trail_run.vue";
import offline from "../views/OEE-H/_offline.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      { path: "/Total", name: "Total", component: Total },
      { path: "/MU", name: "MU", component: MU },
      { path: "/MCRR", name: "MCRR", component: MCRR },
      { path: "/Down", name: "Down", component: Down },
      { path: "/Yield", name: "Yield", component: Yield },
      { path: "/DownTime", name: "DownTime", component: DownTime },
      { path: "/Hourly", name: "Hourly", component: Hourly },
      { path: "/NO_Plan", name: "NO_Plan", component: NO_Plan },
      { path: "/_OEE_H_Down", name: "_OEE_H_Down", component: _OEE_H_Down },
      {
        path: "/_Out_of_cycle",
        name: "_Out_of_cycle",
        component: Out_of_cycle,
      },
      {
        path: "/OEE_change_over",
        name: "OEE_change_over",
        component: OEE_change_over,
      },
      { path: "/unknown", name: "unknown", component: unknown },
      { path: "/setUp", name: "setUp", component: setUp },
      { path: "/processing", name: "processing", component: processing },
      { path: "/trail_run", name: "trail_run", component: trail_run },
      { path: "/offline", name: "offline", component: offline },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
