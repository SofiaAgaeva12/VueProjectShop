import {createRouter, createWebHistory} from 'vue-router'
import vCatalog from "@/components/Catalog";
import vCart from "@/components/Cart";
import Register from "@/pages/Auth";

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Register,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
