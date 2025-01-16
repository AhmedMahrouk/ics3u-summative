import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import MoviesView from '../views/MoviesView.vue';
import DetailView from '../views/DetailView.vue';
import CartView from '../views/CartView.vue';
import ErrorView from '../views/ErrorView.vue';
import SettingsView from '../views/SettingsView.vue';
import { userAuthorized, useStore } from '../store';


const routes = [
    { path: '/', meta: { auth: false }, component: HomeView },
    { path: '/register', meta: { auth: false }, component: RegisterView },
    { path: '/login', meta: { auth: false }, component: LoginView },
    { path: '/movies', meta: { auth: true }, component: MoviesView },
    { path: '/movies/:id', meta: { auth: true }, component: DetailView },
    { path: '/cart',  meta: { auth: true },component: CartView },
    { path: '/settings', meta: { auth: true }, component: SettingsView},
    { path: '/:pathMatch(.*)*', meta: { auth: false }, component: ErrorView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  userAuthorized.then(() => {
    const store = useStore();

    if (!store.user && to.meta.auth) {
      next("/login");
    } else {
      next();
    }
  });
});

export default router;