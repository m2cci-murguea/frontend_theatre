import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ShowDetail from "@/views/ShowDetail.vue";

const routes = [
    {
        //the home page
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        //the detail page
        path: "/detail/:id",
        name: "detail",
        component: ShowDetail,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;