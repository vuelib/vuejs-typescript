import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    modules
});

export default store;
