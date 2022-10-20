import {createRouter, createWebHistory} from 'vue-router'
import vCatalog from "@/components/v-catalog";
import vCart from "@/components/v-cart";
import Register from "@/pages/Register";

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
