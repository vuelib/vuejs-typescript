require("./bootstrap");
window.Vue = require("vue");

import App from "./App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";
import axios from "axios";
import { routes } from "./routes";
import { store } from "./store";
import moment from "moment";

Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("DD.MM");
    }
});

Vue.filter("fullFormatDate", function(value) {
    if (value) {
        return moment(String(value)).format("DD.MM. YYYY");
    }
});
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: "history",
    routes: routes
});

router.beforeEach((to, from, next) => {
    document.title =
        to.meta && to.meta.title ? to.meta.title : "Šotola Miroslav";

    Array.from(document.querySelectorAll("[data-vue-meta]")).map(el =>
        el.parentNode.removeChild(el)
    );

    if (to.meta && to.meta.metaTags) {
        to.meta.metaTags
            .map(tagDef => {
                let tag = document.createElement("meta");

                Object.keys(tagDef).forEach(key =>
                    tag.setAttribute(key, tagDef[key])
                );

                tag.setAttribute("data-vue-meta", "Test");

                return tag;
            })
            .forEach(tag => document.head.appendChild(tag));
    }

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

const app = new Vue({
    el: "#app",
    router: router,
    store: store,
    render: h => h(App)
});
