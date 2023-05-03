import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import MainView from '@/views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'intro',
        component: MainView,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/content/HomeView.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/content/AboutView.vue'),
            },
            {
                path: '/friends',
                name: 'friends',
                component: () => import('@/views/content/FriendsView.vue'),
            },
            {
                path: '/archives',
                name: 'archives',
                component: () => import('@/views/content/ArchivesView.vue'),
                children: []
            },
            {
                path: '/archives/deepin',
                name: 'ArchiveOne',
                component: () => import('@/views/content/archives/ArchiveOne.vue'),
            },
            {
                path: '/archives/webassembly',
                name: 'ArchiveTwo',
                component: () => import('@/views/content/archives/ArchiveTwo.vue'),
            },
            {
                path: '/archives/cpp-builtin',
                name: 'ArchiveThree',
                component: () => import('@/views/content/archives/ArchiveThree.vue'),
            }
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
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router


