// vue router instance
import { createRouter, createWebHistory } from 'vue-router'

// pocketbase instance
import PocketBase from 'pocketbase'
const pb = new PocketBase('https://ecommerce.forkbun.evansolanoy.studio');

// view import
import SignupForm from '@/views/SignupForm.vue';
import LoginForm from '@/views/LoginForm.vue';
import HomewithCta from '@/views/HomewithCta.vue'
import Products from '@/views/Products.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomewithCta
        },
        {
            path: '/create',
            name: 'create',
            component: SignupForm,
            children: [

            ]
        },
        {
            path: '/login',
            name: 'login',
            component: LoginForm
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
    ]
})

export default router