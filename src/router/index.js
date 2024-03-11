import { createRouter, createWebHistory } from 'vue-router'
import Construction from '../views/Construction.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Construction
    },
    {
        path: '/login',
        name: 'Login',
        component: Construction
    },
    {
        path: '/cadastro',
        name: 'Singup',
        component: Construction
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router