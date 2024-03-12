import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Construction = () => import('../views/Construction.vue')

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
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Home' }
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router