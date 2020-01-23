import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/money' // 默认路径，redirect 是重定向 到/money
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'*',
    component:NotFound
  },
];

const router = new VueRouter({
  routes
});

export default router;
