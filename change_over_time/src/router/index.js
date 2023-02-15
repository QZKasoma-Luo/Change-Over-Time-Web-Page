import { createRouter, createWebHashHistory } from "vue-router";
import for_down_time from '@/components/for_down_time'
import for_down from '@/components/for_down'
import for_hourly from '@/components/for_hourly'
import for_yield from '@/components/for_yield'
import MCRR from '@/components/MCRR'
import MU from '@/components/MU'
import for_OEE_H from '@/components/for_OEE_H'
import _home from '@/components/_home'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: _home,
    },

    {
      path: '/for_down_time',
      component: for_down_time
    },

    {
      path: '/for_down',
      component: for_down
    },

    {
      path: '/for_hourly',
      component: for_hourly
    },

    {
      path:'/for_yield',
      component: for_yield
    },

    {
      path:'/MCRR',
      component: MCRR
    },

    {
      path: '/MU',
      component: MU
    },

    {
      path: '/for_OEE_H',
      component: for_OEE_H
    }
  ]
});
export default router;
