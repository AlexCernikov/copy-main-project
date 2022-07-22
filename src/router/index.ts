import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('../views/ContactUsView.vue'),
  },
  {
    path: '/faqView',
    name: 'faqView',
    component: () => import('../views/FaqView.vue'),
  },
  {
    path: '/ourSpacesView',
    name: 'ourSpacesView',
    component: () => import('../views/OurSpacesView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '/users',
        component: () => import('../views/UsersView.vue'),
      },
      {
        path: '/reservations',
        component: () => import('../views/ReservationsView.vue'),
      },
      {
        path: '/entities',
        component: () => import('../views/EntitiesView.vue'),
      },
      {
        path: '/settings',
        component: () => import('../views/SettingsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
