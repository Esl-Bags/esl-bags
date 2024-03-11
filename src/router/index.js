import { createRouter, createWebHistory } from 'vue-router'
import Construction from '../views/Construction.vue'
import Home from '../views/Home/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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