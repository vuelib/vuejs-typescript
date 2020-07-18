import "./bootstrap";

import Vue from "vue";
import App from "./components/App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";
import axios from "axios";
import { router } from "./routes";
import store from "./state/store";
import { apolloProvider } from "./appoloClient";

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const app = new Vue({
    el: "#app",
    router,
    store,
    apolloProvider,
    render: h => h(App)
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
