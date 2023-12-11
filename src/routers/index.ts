import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import MusicPage from '@/pages/MusicPage.vue';
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/music",
        name: "MusicPage",
        component: MusicPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;