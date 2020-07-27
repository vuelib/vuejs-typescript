import VueRouter from "vue-router";
import Auth from "./auth";
import Admin from "./admin";
import BasicRoutes from "./basicRoutes";
import Category from "./category";
import Orders from "./orders";
import Settings from "./settings";
import store from "../state/store";

const routes = [
    ...Auth,
    ...Admin,
    ...BasicRoutes,
    ...Category,
    ...Orders,
    ...Settings
    // { path: "*", component: "errors/404.vue" }
];

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: "login"
            });
        } else {
            if (to.matched.some(record => record.meta.requiredInvoice)) {
                if (!store.getters.invoice) {
                    next({
                        name: "invoice"
                    });
                } else {
                    next();
                }
            } else {
                next();
            }
        }
    } else {
        next();
    }
});
