import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api";
import modules from "./modules";
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules
});

export default store;
