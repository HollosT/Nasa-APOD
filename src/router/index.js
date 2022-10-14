import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Details from '../views/DetailsApod.vue';
import SelectedRange from '../views/SelectedRangeApod.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/apods/:id',
    name: 'Details',
    component: Details,
  },
  
  {
    path: '/apods/select/',
    name: 'SelectedRange',
    component: SelectedRange,
 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
