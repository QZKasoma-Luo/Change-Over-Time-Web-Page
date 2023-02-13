import { createRouter, createWebHashHistory } from "vue-router";

import _home from "@/components/_home";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/_home",
      component: _home,
    },
  ],
});
export default router;
