import VueRouter from "vue-router";

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import Register from "@/pages/Register";

export const router = new VueRouter({
    routes: [
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
})
