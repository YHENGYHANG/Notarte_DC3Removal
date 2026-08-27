import { createRouter, createWebHistory } from "vue-router";


import Ecom from "../views/Ecom.vue";
import Product from "../views/Product.vue";
import BasketPage from "../views/BasketPage.vue";
import Orders from "../views/Orders.vue";

const routes = [{
        path: '/',
        name: 'Ecom',
        component: Ecom
    },

    {
        path: '/product',
        name: 'Product',
        component: Product
    },

    {
        path: '/basketPage',
        name: 'BasketPage',
        component: BasketPage
    },

    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router