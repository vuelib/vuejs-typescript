import VueRouter from "vue-router";
import Auth from "./auth";
import Admin from "./admin";
import BasicRoutes from "./basicRoutes";
import Category from "./category";
import Orders from "./orders";
import Settings from "./settings";

const routes = [
    ...Auth,
    ...Admin,
    ...BasicRoutes,
    ...Category,
    ...Orders,
    ...Settings
];

export const router = new VueRouter({
    mode: "history",
    routes
});
