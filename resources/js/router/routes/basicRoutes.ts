const { page } = require("./index");

export default [
    {
        name: "Home",
        path: "/",
        component: () => import("../../pages/Home.vue")
    },
    {
        name: "kontakt",
        path: "/kontakt",
        component: () => import("../../pages/contact/index.vue")
    },
    {
        name: "kestazeni",
        path: "/ke-stazeni",
        component: () => import("../../pages/kestazeni.vue")
    }
];
