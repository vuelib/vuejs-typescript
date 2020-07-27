import "./bootstrap";

import Vue from "vue";
import App from "./components/App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";
import axios from "axios";
import { router } from "./routes";
import store from "./state/store";

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// Vue.config.productionTip = false;
// Vue.config.devtools = false;
// Vue.config.errorHandler = function(err, vm, info) {
//     console.log(`Error: ${err.toString()}\nInfo: ${info}`);
// };

// Vue.config.warnHandler = function(msg, vm, trace) {
//     console.log(`Warn: ${msg}\nTrace: ${trace}`);
// };
const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
