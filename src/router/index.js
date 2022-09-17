import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import Manage from "../views/Manage.vue";
import useUserStore from '../stores/user'
import Song from "../views/Song.vue";

const routes = [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
  {
      name: "about",
      path: "/about",
    component: AboutView,
  },
    {
        name: "manage",
        path: "/manage-music",
        component: Manage,
        beforeEnter: (to, from, next) => {
            next()
        },
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/manage',
        redirect: {name : 'manage'}
    },
    {
        name: 'song',
        path: '/song/:id',
        component: Song
    },
    {
        path: '/:catchAll(.*)*',
        redirect: {name : 'home'}
    }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
    linkExactActiveClass: "text-yellow-600"
})
router.beforeEach((to, from, next) => {
    // console.log(to.meta)

    if(!to.meta.requiresAuth){
        next()
        return;
    }
    const store = useUserStore()
    if (store.userLoggedIn){
        next()
    }else{
        next({name: "home"})
    }
})
export default router
