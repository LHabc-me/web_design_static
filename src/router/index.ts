import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import IntroView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'intro',
        component: IntroView
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        children: [
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/home/AboutView.vue'),
            },
            {
                path: '/friends',
                name: 'friends',
                component: () => import('@/views/home/FriendsView.vue'),
            },
            {
                path: '/archives',
                name: 'archives',
                component: () => import('@/views/home/ArchivesView.vue'),
            },
        ]
    },
    {
        path: '/404',
        name: 'pageNotFound',
        component: () => import('@/views/PageNotFoundView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
