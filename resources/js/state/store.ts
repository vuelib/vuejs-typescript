import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = `${window.location.origin}/api`;
import modules from "./modules";
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    modules
});

export default store;
