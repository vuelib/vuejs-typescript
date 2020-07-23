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

// router.beforeEach((to, from, next) => {
//     document.title =
//         to.meta && to.meta.title ? to.meta.title : "Šotola Miroslav";

//     Array.from(document.querySelectorAll("[data-vue-meta]")).map(el =>
//         el.parentNode.removeChild(el)
//     );

//     if (to.meta && to.meta.metaTags) {
//         to.meta.metaTags
//             .map(tagDef => {
//                 let tag = document.createElement("meta");

//                 Object.keys(tagDef).forEach(key =>
//                     tag.setAttribute(key, tagDef[key])
//                 );

//                 tag.setAttribute("data-vue-meta", "Test");

//                 return tag;
//             })
//             .forEach(tag => document.head.appendChild(tag));
//     }

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!store.getters.loggedIn) {
//             next({
//                 name: "login"
//             });
//         } else {
//             if (to.matched.some(record => record.meta.requiredInvoice)) {
//                 if (!store.getters.invoice) {
//                     next({
//                         name: "invoice"
//                     });
//                 } else {
//                     next();
//                 }
//             } else {
//                 next();
//             }
//         }
//     } else {
//         next();
//     }
// });
